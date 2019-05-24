import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarrerService} from "../service/carrer.service";
import {Vacancy} from "../model/vacancy.model";
@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.scss']
})
export class CarrerComponent implements OnInit {
  jobs: Vacancy[]


    constructor( private carrerservice:CarrerService) { }
  ngOnInit(){
    const jobsObservable = this.carrerservice.getAllVacancy();
    jobsObservable.subscribe((data:Vacancy[]) => {
      this.jobs = data
    });
  }



}

// export const jobs = [
//   {title : 'IT tieng nhat', expirationDate :'20/3/2019' ,person : 5 },
//   {title : 'IT tieng han', expirationDate :'20/3/2019' ,person : 5 },
//   {title : 'IT tieng anh', expirationDate :'20/3/2019' ,person : 5 }
// ]

