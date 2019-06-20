import {Component, OnInit} from '@angular/core';
import {Review} from '../model/review';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Position} from '../model/position.model';
import {PositionService} from '../service/position.service';
import {CreateVacancyComponent} from '../create-vacancy/create-vacancy.component';

@Component({
  selector: 'app-view-review-applicant',
  templateUrl: './view-review-applicant.component.html',
  styleUrls: ['./view-review-applicant.component.scss']
})
export class ViewReviewApplicantComponent implements OnInit {
  viewReviewApplicant: Review[] = viewReviewApplicant;
  myForm: FormGroup;
  apiURL = '';
  results: string[] = ['Pass', 'Fail', 'Consider'];
  applicantNumber: FormControl;
  position: FormControl;
  positionRecommend: FormControl;
  technicalReview: FormControl;
  behaviorReview: FormControl;
  languageReview: FormControl;
  result: FormControl;
  note: FormControl;

  constructor(private positionService: PositionService, protected httpClient: HttpClient) {
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onsubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.httpClient.post(`${this.apiURL}/v00.acacyavhbjnk/`, this.myForm.value);
      this.myForm.reset();
    }
  }
  createFormControls() {
    this.applicantNumber = new FormControl('', Validators.required);
    this.position = new FormControl('', Validators.required);
    this.positionRecommend = new FormControl('', Validators.required);
    this.technicalReview = new FormControl('', Validators.required);
    this.behaviorReview = new FormControl('', Validators.required);
    this.languageReview = new FormControl('', Validators.required);
    this.result = new FormControl('', Validators.required);
    this.note = new FormControl('', Validators.required);
  }

  createForm() {
    this.myForm = new FormGroup({
      applicantNumber: this.applicantNumber,
      position: this.position,
      positionRecommend: this.positionRecommend,
      technicalReview: this.technicalReview,
      behaviorReview: this.behaviorReview,
      languageReview: this.languageReview,
      result: this.result,
      note: this.note,
    });
  }
}

export const viewReviewApplicant = [
  {
    applicantNumber: 15130125,
    position: 'Tuyển Dev font-end',
    positionRecommend: 'Font-End',
    technicalReview: '7/10',
    behaviorReview: '7/10',
    languageReview: 'Java, Angular',
    result: 'pass',
    note: 'Lương 1000$'
  },
  {
    applicantNumber: 15130147,
    position: 'Tuyển Dev back-end',
    positionRecommend: 'Back-End',
    technicalReview: '4/10',
    behaviorReview: '7/10',
    languageReview: 'Java, DataBase',
    result: 'pass',
    note: 'Lương 1500$'
  }
];
