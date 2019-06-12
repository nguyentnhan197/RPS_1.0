import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarrerService} from "../service/carrer.service";
import {Vacancy} from "../model/vacancy.model";
import {PositionService} from "../service/position.service";
import {VacancyNhan} from "../model/vacancyNhan";

@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.scss']
})
export class CarrerComponent implements OnInit {
  jobs: VacancyNhan[] = viewVacancy;


  constructor(private carrerService: CarrerService,
              private positionService: PositionService) {
  }

  ngOnInit() {
    // const jobsObservable = this.carrerService.getAllVacancy();
    // jobsObservable.subscribe((data:Vacancy[]) => {
    //   this.jobs = data
    // });
  }


}


export const viewVacancy = [{
  idVacancy: 1,
  vacancyNumber: '123',
  dateCreated: '20/3/2018',
  ownedBy: 'chi Thuy',
  state: 'opening',
  position: 'Tuyển Dev font-end',
  description: 'Dịch các tài liệu về kỹ thuật từ tiếng Nhật sang tiếng Việt và từ tiếng Việt sang tiếng Nhật',
  numberOpening: 50,
  department: 'IT1',
  dateClose: '20/5/2018',
  requirement: 'Tiếng Nhật giao tiếp tốt (nói và viết), bằng N2 trở lên hoặc tương đương',
  offer: 'Mức lương cạnh tranh',
  experience: 'Fresher',
  language: 'Java, Angular',
  gender: 'Male',
  degree: 'Đh',
  typeOfStaff: 'Full Time'
}
  // {
  //   idVacancy: 2,
  //   vacancyNumber: '123',
  //   dateCreated: '20/3/2018',
  //   user: 'chi Thuy',
  //   state: 'opening',
  //   position: 'IT2 ',
  //   description: 'Dịch các tài liệu về kỹ thuật từ tiếng Nhật sang tiếng Việt và từ tiếng Việt sang tiếng Nhật',
  //   numberOpening: 3,
  //   department: 'IT2',
  //   dateClose: '20/3/2018',
  //   requirement: 'Tiếng Nhật giao tiếp tốt (nói và viết), bằng N2 trở lên hoặc tương đương',
  //   offer: 'Mức lương cạnh tranh'
  // }
]

