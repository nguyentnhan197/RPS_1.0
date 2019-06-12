import {Component, OnInit} from '@angular/core';
import {MrManage} from "../../model/mrManage";

@Component({
  selector: 'app-manpower-request-manager',
  templateUrl: './manpower-request-manager.component.html',
  styleUrls: ['./manpower-request-manager.component.scss']
})
export class ManpowerRequestManagerComponent implements OnInit {
  viewMRManages: MrManage[] = viewMRManages;

  constructor() {
  }

  ngOnInit() {
  }

}

export const viewMRManages =
  [
    {
      idRequiet: 15130125,
      position: 'Tuyển Font-End',
      requieter: 'Nguyễn Quang Trường',
      quatity: 5,
      experince: 'Junior',
      fromDate: '31/5/2019',
      toDate: '30/6/2019',
      approver: 'HR',
      status: 'Open'
    }
  ]
