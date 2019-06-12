import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:user = new user();
  constructor() { }

  ngOnInit() {
  }

}
export class user{
  username:string;
  pass:string;
}
