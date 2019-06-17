import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-applicant',
  templateUrl: './create-applicant.component.html',
  styleUrls: ['./create-applicant.component.scss']
})
export class CreateApplicantComponent implements OnInit {
  myForm: FormGroup;
  apiURL = '';
  id: FormControl;
  name: FormControl;
  email: FormControl;
  phone: FormControl;
  vacacyNumber: FormControl;
  position: FormControl;
  dateOfApplicant: FormControl;
  status: FormControl;
  experience: FormControl;
  nameOfTheInterviewer: FormControl;
  dateScheduled: FormControl;
  start: FormControl;
  end: FormControl;

  constructor(protected httpClient: HttpClient) {
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onsubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.httpClient.post(`${this.apiURL}/v00.acacyavhbjnk/`, this.myForm.value);
      this.myForm.reset();
    }

  }


  createFormControls() {
    this.id = new FormControl('', Validators.required);
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.required);
    this.vacacyNumber = new FormControl('', Validators.required);
    this.position = new FormControl('', Validators.required);
    this.dateOfApplicant = new FormControl('', Validators.required);
    this.status = new FormControl('', Validators.required);
    this.experience = new FormControl('', Validators.required);
    this.nameOfTheInterviewer = new FormControl('', Validators.required);
    this.dateScheduled = new FormControl('', Validators.required);
    this.start = new FormControl('', Validators.required);
    this.end = new FormControl('', Validators.required);
  }

  createForm() {
    this.myForm = new FormGroup({
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      vacacyNumber: this.vacacyNumber,
      position: this.position,
      dateOfApplicant: this.dateOfApplicant,
      status: this.status,
      experience: this.experience,
      nameOfTheInterviewer: this.nameOfTheInterviewer,
      dateScheduled: this.dateScheduled,
      start: this.start,
      end: this.end,
    });

  }

}
