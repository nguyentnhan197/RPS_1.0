import { Component, OnInit } from '@angular/core';
import {Review} from "../model/review";

@Component({
  selector: 'app-view-review-applicant',
  templateUrl: './view-review-applicant.component.html',
  styleUrls: ['./view-review-applicant.component.scss']
})
export class ViewReviewApplicantComponent implements OnInit {
  viewReviewApplicant: Review[] = viewReviewApplicant;

  constructor() { }

  ngOnInit() {
  }

}
export const viewReviewApplicant = [
  {
  applicantNumber: 15130125,
  titleVacancy: 'Tuyển Dev font-end',
 suitableLocation: 'Font-End',
  danhGiaChuyenNganh: '7/10',
  danhGiaUngXu: '7/10',
  experince: 'Fresher',
  trinhDoNgonNgu: 'Java, Angular',
  result: 'pass',
  ghiChu: 'Lương 1000$'
  },
  {
    applicantNumber: 15130147,
    titleVacancy: 'Tuyển Dev back-end',
    suitableLocation: 'Back-End',
    danhGiaChuyenNganh: '4/10',
    danhGiaUngXu: '7/10',
    experince: 'Fresher',
    trinhDoNgonNgu: 'Java, DataBase',
    result: 'pass',
    ghiChu: 'Lương 1500$'
  }
]
