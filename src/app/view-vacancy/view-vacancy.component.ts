import {Component, OnInit} from '@angular/core';
import {VacancyNhan} from '../model/vacancyNhan';
import {CarrerService} from "../service/carrer.service";
import {VacancyNhan} from "../model/vacancyNhan";
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-view-vacancy',
  templateUrl: './view-vacancy.component.html',
  styleUrls: ['./view-vacancy.component.scss']
})
export class ViewVacancyComponent implements OnInit {
vacancys:VacancyNhan[]
  constructor( private carrerService: CarrerService, private authenService:AuthenticationService) { }

  ngOnInit() {
    this.carrerService.getAllVacancy().subscribe((data:VacancyNhan[])=>{this.vacancys=data,this.authenService.authenticated});
  }

}


