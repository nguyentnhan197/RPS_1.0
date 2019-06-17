import {Component, OnInit} from '@angular/core';
import {CarrerService} from "../service/carrer.service";
import {Position} from "../model/position.model";
import {PositionService} from "../service/position.service";
import {DepartmentService} from "../service/department.service";
import {Department} from "../model/department.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {AuthenticationService} from "../service/authentication.service";
import {VacancyNhan} from "../model/vacancyNhan";
import {of} from "rxjs";


@Component({
  selector: 'app-create-vacancy',
  templateUrl: './create-vacancy.component.html',
  styleUrls: ['./create-vacancy.component.scss']
})
export class CreateVacancyComponent implements OnInit {
  ownedBy: string= this.authenticationService.getUsername();
  vacancy: VacancyNhan;
  submitted = false;
  positionList: Position[];
  departmentList: Department[];
  myForm: FormGroup;
  numberOpening: FormControl;
  dateClose: FormControl;
  description: FormControl;
  degree: FormControl;
  offer: FormControl;
  state: FormControl;
  position: FormGroup;
  experience: FormControl;
  department: FormGroup;
  gender: FormControl;
  typeOfStaff: FormControl;
  apiURL: string = 'http://localhost:8080/RecruitmentProcessSystem';




  // ownedBy=this.carrerService.ownedBy;
  constructor(private carrerService: CarrerService,
              private positionService: PositionService,
              private departmentService: DepartmentService,
              private httpClient: HttpClient,
              private router: Router,
              private authenticationService:AuthenticationService,
              private fBuider: FormBuilder
  ) {
  }

  ngOnInit() {
    this.getPositionLst();
    this.getDepartmentList();
    this.createFormControls();
    this.createForm();
    of(


      this.myForm.controls.department.patchValue(this.departmentList[0].idDepartment));

  }

  onsubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value['offer']);
      console.log(this.myForm.value);
      console.log(this.apiURL + '/addVacancy');
      return this.httpClient.post(this.apiURL + '/addVacancy', new VacancyNhan( this.myForm.value)).subscribe(data => {
          this.router.navigate(['/view-vacancy']);
        }, (error: any) => {
          console.log(error);
        }
      );
      this.myForm.reset();
    }

  }

  createVacancy() {


    // this.carrerService.createVacancy(this.vacancy).subscribe(response=>{this.getAllVacancy()});
  }

  // getAllVacancy(){
  //    this.carrerService.getAllVacancy().subscribe((data:Vacancy[])=>{this.varcancys=data});

  //  }
  getPositionLst() {
    this.positionService.getAllPosition().subscribe((dataDB: Position[]) => {
      this.positionList = dataDB
    });
  }

  getDepartmentList() {
    this.departmentService.getAllDepartment().subscribe((data: Department[]) => {
      this.departmentList = data
    });
  }

  createFormControls() {
    const now= Date.now();
    this.numberOpening = new FormControl('', Validators.required);
    this.dateClose = new FormControl('', Validators.required);
    this.description= new FormControl('', Validators.required);
    this.degree = new FormControl('rtrtrt', Validators.required);
    this.state = new FormControl('', Validators.required);
    this.position = new FormGroup({idPosition: new FormControl(''),
                                              positionName:new FormControl('',Validators.required)});
    this.experience = new FormControl('', Validators.required);
    this.department = new FormGroup({idDepartment: new FormControl(''),
      departmentName:new FormControl('',Validators.required)});
    this.gender = new FormControl('', Validators.required);
    this.typeOfStaff = new FormControl('', Validators.required);
    this.offer = new FormControl('', Validators.required);

  }

  createForm() {
    this.myForm = new FormGroup({
      numberOpening: this.numberOpening,
      dateClose: this.dateClose,
      description: this.description,
      degree: this.degree,
      status: this.state,
      position: this.position,
      experience: this.experience,
      department: this.department,
      gender: this.gender,
      typeOfStaff: this.typeOfStaff,
      offer:this.offer,

    })
  }

}
