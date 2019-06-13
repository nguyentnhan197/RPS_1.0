import {Component, OnInit} from '@angular/core';
import {VacancyNhan} from '../model/vacancyNhan';

@Component({
  selector: 'app-view-vacancy',
  templateUrl: './view-vacancy.component.html',
  styleUrls: ['./view-vacancy.component.scss']
})
export class ViewVacancyComponent implements OnInit {
  viewVacancys: VacancyNhan[] = viewVacancy;

  constructor() {
  }

  ngOnInit() {
  }

}

export const viewVacancy = [
  {
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
];
