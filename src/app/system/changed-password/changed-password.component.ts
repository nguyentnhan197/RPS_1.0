import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changed-password',
  templateUrl: './changed-password.component.html',
  styleUrls: ['./changed-password.component.scss']
})
export class ChangedPasswordComponent implements OnInit {
  changePass: changePass = new changePass() ;
  constructor() { }

  ngOnInit() {
    console.log(this.changePass);
    if(this.changePass.oldPass.length < 3){
      console.log("aaaaaaaaaa");
    }
  }

}
export class changePass {
  oldPass:string = '';
  newPass:string = '';
  confirmPass:string = '';
}

