import { Component, OnInit } from '@angular/core';
import {MrManage} from "../../model/mrManage";

@Component({
  selector: 'app-applicant-approval',
  templateUrl: './applicant-approval.component.html',
  styleUrls: ['./applicant-approval.component.scss']
})
export class ApplicantApprovalComponent implements OnInit {
  viewApplicantApprovals: MrManage[] = viewApplicantApprovals;
  constructor() { }

  ngOnInit() {
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
  ]
