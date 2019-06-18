import { Component, OnInit } from '@angular/core';
import {User} from "../model/user.model";
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
// user:User=this.authenticationService.currentUserValue;
  constructor( private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

}
