import {Component, OnInit} from '@angular/core';
import {CarrerService} from '../service/carrer.service';
import {Vacancy} from '../model/vacancy.model';
import {Position} from '../model/position.model';
import {PositionService} from '../service/position.service';
import {DepartmentService} from '../service/department.service';
import {Department} from '../model/department.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {VacancyNhan} from '../model/vacancyNhan';


@Component({
  selector: 'app-create-vacancy',
  templateUrl: './create-vacancy.component.html',
  styleUrls: ['./create-vacancy.component.scss']
})
export class CreateVacancyComponent implements OnInit {
  vacancy: VacancyNhan;
  submitted = false;
  positionList: Position[] ;
  departmentList: Department[];
  myForm: FormGroup;
  numberOpening: FormControl;
  quantity: FormControl;
  dateClose: FormControl;
  descriptiondetails: FormControl;
  degree: FormControl;
  status: FormControl;
  title: FormControl;
  experience: FormControl;
  department: FormControl;
  gender: FormControl;
  typeOfStaff: FormControl;
  apiURL = '';

  constructor(private carrerService: CarrerService,
              private positionService: PositionService,
              private departmentService: DepartmentService,
              protected httpClient: HttpClient
  ) {
  }

  ngOnInit() {
    this.getPositionLst();
    this.getDepartmentList();
    this.createFormControls();
    this.createForm();

  }

  createVacancy() {
    // this.carrerService.createVacancy(this.vacancy).subscribe(response=>{this.getAllVacancy()});
  }

  // getAllVacancy(){
  //    this.carrerService.getAllVacancy().subscribe((data:Vacancy[])=>{this.varcancys=data});
  //
  //  }

  getPositionLst() {
    this.positionService.getAllPosition().subscribe((dataDB: Position[]) => {
      this.positionList = dataDB;
    });
  }
  getDepartmentList() {
    this.departmentService.getAllDepartment().subscribe((data: Department[]) => {
      this.departmentList = data;
    });
  }

  createFormControls() {
    this.numberOpening = new FormControl('', Validators.required);
    this.quantity = new FormControl(0, Validators.required);
    this.dateClose = new FormControl('', Validators.required);
    this.descriptiondetails = new FormControl('', Validators.required);
    this.degree = new FormControl('', Validators.required);
    this.status = new FormControl('', Validators.required);
    this.title = new FormControl('', Validators.required);
    this.experience = new FormControl('', Validators.required);
    // this.department = new FormControl('', Validators.required);
    this.gender = new FormControl('', Validators.required);
    this.typeOfStaff = new FormControl('', Validators.required);

  }

  createForm() {
    this.myForm = new FormGroup({
      numberOpening: this.numberOpening,
      quantity: this.quantity,
      dateClose: this.dateClose,
      descriptiondetails: this.descriptiondetails,
      degree: this.degree,
      status: this.status,
      title: this.title,
      experience: this.experience,
      // department: new FormGroup({
      //   // idDepartment : 1,
      //   departmentName : this.departmentName
      // }),
      gender: this.gender,
      typeOfStaff: this.typeOfStaff
    });
  }

  onsubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.httpClient.post(`${this.apiURL}/v00.acacyavhbjnk/`, this.myForm.value);
      this.myForm.reset();
    }
  }
}
