import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  myForm: FormGroup;
  apiURL = '';
  userNumber: FormControl;
  fullName: FormControl;
  userName: FormControl;
  birthday: FormControl;
  gender: FormControl;
  address: FormControl;
  email: FormControl;
  phone: FormControl;
  namePosition: FormControl;
  nameDepartment: FormControl;
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
    this.userNumber = new FormControl('', Validators.required);
    this.fullName = new FormControl('', Validators.required);
    this.userName = new FormControl('', Validators.required);
    this.birthday = new FormControl('', Validators.required);
    this.gender = new FormControl('', Validators.required);
    this.address = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.required);
    this.namePosition = new FormControl('', Validators.required);
    this.nameDepartment = new FormControl('', Validators.required);

  }
  createForm() {
    this.myForm = new FormGroup({
      userNumber: this.userNumber,
      fullName: this.fullName,
      userName: this.userName,
      birthday: this.birthday,
      gender: this.gender,
      address: this.address,
      email: this.email,
      phone: this.phone,
      namePosition: this.namePosition,
      nameDepartment: this.nameDepartment,
    });
  }
}
