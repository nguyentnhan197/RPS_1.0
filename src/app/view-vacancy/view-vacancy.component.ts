import {Component, OnInit} from '@angular/core';
import {CarrerService} from '../service/carrer.service';
import {VacancyNhan} from '../model/vacancyNhan';
import {AuthenticationService} from '../service/authentication.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {PositionService} from "../service/position.service";
import {DepartmentService} from "../service/department.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-vacancy',
  templateUrl: './view-vacancy.component.html',
  styleUrls: ['./view-vacancy.component.scss']
})
export class ViewVacancyComponent implements OnInit {

// vacancys: VacancyNhan[];
  myForm: FormGroup;
  apiURL = '';
  submitted = false;
  idVacancy: FormControl;
  ownedBy: FormControl;
  status: FormControl;
  position: FormControl;
  dateClose: FormControl;
  typeOfStaff: FormControl;

  constructor(private carrerService: CarrerService,
              private positionService: PositionService,
              private departmentService: DepartmentService,
              protected httpClient: HttpClient,
              private router: Router,
              private authenticationService: AuthenticationService,
              private fBuider: FormBuilder
  ) {
  }

  ngOnInit() {
    // this.carrerService.getAllVacancy().subscribe((data: VacancyNhan[] ) => this.vacancys = data );
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.idVacancy = new FormControl('', Validators.required);
    this.ownedBy = new FormControl('', Validators.required);
    this.status = new FormControl('', Validators.required);
    this.position = new FormControl('', Validators.required);
    this.dateClose = new FormControl('', Validators.required);
    this.typeOfStaff = new FormControl('', Validators.required);
  }

  createForm() {
    this.myForm = new FormGroup({
      idVacancy: this.idVacancy,
      ownedBy: this.ownedBy,
      status: this.status,
      position: this.position,
      dateClose: this.dateClose,
      typeOfStaff: this.typeOfStaff,
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


