import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-changed-password',
  templateUrl: './changed-password.component.html',
  styleUrls: ['./changed-password.component.scss']
})
export class ChangedPasswordComponent implements OnInit {
  changePassForm:FormGroup;
  oldPass : FormControl;
  newPass : FormControl;
  confirmPass : FormControl;
  constructor() { }

  ngOnInit() {
    this.createFormControl();
    this.createFormGroup();
  }
  createFormControl(){
    this.oldPass = new FormControl('',[Validators.required, Validators.minLength(8)]);
    this.newPass = new FormControl('',[Validators.required, Validators.minLength(8)]);
    this.confirmPass = new FormControl('',[Validators.required, Validators.minLength(8)]);
  }

  createFormGroup(){
    this.changePassForm = new FormGroup({
      oldPass : this.oldPass,
      newPass : this.newPass,
      confirmPass : this.confirmPass
    })
  }
  onSubmit(){
    console.log(this.changePassForm.value);
    this.changePassForm.reset();
  }
  oncancel(){
    this.changePassForm.reset();
  }

}

