import { Component, OnInit } from '@angular/core';
import {Review} from "../model/review";
import {CarrerService} from "../service/carrer.service";
import {VacancyNhan} from "../model/vacancyNhan";
import {AuthenticationService} from "../service/authentication.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-view-vacancy',
  templateUrl: './view-vacancy.component.html',
  styleUrls: ['./view-vacancy.component.scss']
})
export class ViewVacancyComponent implements OnInit {
vacancys:VacancyNhan[]
  constructor( private carrerService: CarrerService, private authenService:AuthenticationService,private http:HttpClient) {



  }
  authenticated(){return this.authenService.authenticated;}

  ngOnInit() {

    this.carrerService.getAllVacancy().subscribe((data:VacancyNhan[])=>{this.vacancys=data});
  }

}
