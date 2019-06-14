import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-review-applicant',
  templateUrl: './review-applicant.component.html',
  styleUrls: ['./review-applicant.component.scss']
})
export class ReviewApplicantComponent implements OnInit {

  myForm: FormGroup;
  apiURL = '';
  exps: string[] = ['Fresher', 'Internship', 'Senior'];
  results: string[] = ['Pass', 'Fail', 'Consider'];

  constructor() {
  }

  ngOnInit() {
    this.createForm();
  }

  // onSubmit() {
  //   if (this.myForm.valid) {
  //     console.log(this.myForm.value);
  //     this.httpClient.post(`${this.apiURL}/v00.acacyavhbjnk/`, this.myForm.value);
  //     this.myForm.reset();
  //   }
  // }
  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted!');
      this.myForm.reset();
    }
  }

  createForm() {
    this.myForm = new FormGroup({
      applicantNumber: new FormControl('', [Validators.required, Validators.minLength(5), ]),
      titleVacancy: new FormControl('', Validators.required),
      positionRecommend: new FormControl('', Validators.required),
      technicalReview: new FormControl('', Validators.required),
      behaviorReview: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
      languageReview: new FormControl('', Validators.required),
      result: new FormControl('', Validators.required),
      note: new FormControl('', Validators.required),
    });
  }
}
