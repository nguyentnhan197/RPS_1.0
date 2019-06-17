import {Component, OnInit} from '@angular/core';
import {MrManage} from '../../model/mrManage';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-applicant-approval',
  templateUrl: './applicant-approval.component.html',
  styleUrls: ['./applicant-approval.component.scss']
})
export class ApplicantApprovalComponent implements OnInit {
  viewApplicantApprovals: MrManage[] = viewApplicantApprovals;
  myForm: FormGroup;
  apiURL = '';
  idRequiet: FormControl;
  position: FormControl;
  requieter: FormControl;
  quatity: FormControl;
  experince: FormControl;
  fromDate: FormControl;
  toDate: FormControl;
  status: FormControl;

  constructor(protected httpClient: HttpClient) {
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
    this.idRequiet = new FormControl('', Validators.required);
    this.position = new FormControl('', Validators.required);
    this.requieter = new FormControl('', Validators.required);
    this.quatity = new FormControl('', Validators.required);
    this.experince = new FormControl('', Validators.required);
    this.fromDate = new FormControl('', Validators.required);
    this.toDate = new FormControl('', Validators.required);
    this.status = new FormControl('', Validators.required);

  }


  createForm() {
    this.myForm = new FormGroup({
      idRequiet: this.idRequiet,
      position: this.position,
      requieter: this.requieter,
      quatity: this.quatity,
      experince: this.experince,
      fromDate: this.fromDate,
      toDate: this.toDate,
      status: this.status,
    });

  }

}
export const viewApplicantApprovals =
    [
      {
        idRequiet: 15130125,
        position: 'Tuyển Font-End',
        requieter: 'Nguyễn Quang Trường',
        quatity: 5,
        experince: 'Junior',
        fromDate: '31/5/2019',
        toDate: '30/6/2019',
        status: 'Approve'
      }
    ];


