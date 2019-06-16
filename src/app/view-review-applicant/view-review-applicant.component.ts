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
    positionRecommend: 'Font-End',
    technicalReview: '7/10',
    behaviorReview: '7/10',
    experience: 'Fresher',
    languageReview: 'Java, Angular',
    result: 'pass',
    note: 'Lương 1000$'
  },
  {
    applicantNumber: 15130147,
    titleVacancy: 'Tuyển Dev back-end',
    positionRecommend: 'Back-End',
    technicalReview: '4/10',
    behaviorReview: '7/10',
    experience: 'Fresher',
    languageReview: 'Java, DataBase',
    result: 'pass',
    note: 'Lương 1500$'
  }
]
