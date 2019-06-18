import {Component, OnInit} from '@angular/core';
import {CarrerService} from '../service/carrer.service';
import {VacancyNhan} from '../model/vacancyNhan';
import {AuthenticationService} from '../service/authentication.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-view-vacancy',
  templateUrl: './view-vacancy.component.html',
  styleUrls: ['./view-vacancy.component.scss']
})
export class ViewVacancyComponent implements OnInit {
vacancys: VacancyNhan[]
  myForm: FormGroup;
  apiURL: string = '';
  id_vacancy: FormControl;
  ownedBy: FormControl;
  statusVacancy: FormControl;
  position: FormControl;
  dateGetsClosed: FormControl;
  typeOfStaff: FormControl;


  constructor( private carrerService: CarrerService, private authenService: AuthenticationService, protected httpClient : HttpClient) { }

  ngOnInit() {
    this.carrerService.getAllVacancy().subscribe((data: VacancyNhan[] ) => this.vacancys = data );
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.id_vacancy = new FormControl('', Validators.required);
    this.ownedBy = new FormControl('', Validators.required);
    this.statusVacancy = new FormControl('', Validators.required);
    this.position = new FormControl('', Validators.required);
    this.dateGetsClosed = new FormControl('', Validators.required);
    this.typeOfStaff = new FormControl('', Validators.required);
  }
  createForm() {
    this.myForm = new FormGroup({
      id_vacancy: this.id_vacancy,
      ownedBy: this.ownedBy,
      statusVacancy: this.statusVacancy,
      position: this.position,
      dateGetsClosed: this.dateGetsClosed,
      typeOfStaff: this.typeOfStaff,
    })
  }
  onsubmit(){
    if(this.myForm.valid){
      console.log(this.myForm.value);
      this.httpClient.post(`${this.apiURL}/v00.acacyavhbjnk/`,this.myForm.value);
      this.myForm.reset();
    }
  }
}


