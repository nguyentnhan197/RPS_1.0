import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-applicant',
  templateUrl: './view-applicant.component.html',
  styleUrls: ['./view-applicant.component.scss']
})
export class ViewApplicantComponent implements OnInit {
  candicates: Candicate[] = listOfCandidates;
  constructor() { }

  ngOnInit() {
    
  }

}
export class Candicate {
  id: string;
  name: string;
  email: string;
  phone: string;
  vacacyNumber: string;
  title: string;
  dateOfApplicant: any;
  status: string;
  experience: string;
  nameOfTheInterviewer: string;
  dateScheduled: any;
  start: any;
  end: any;

}
export const listOfCandidates =[
  {
    id : '15130190' ,
    name: 'Phuong' ,
    email: '...@gmail.com',
    phone: '093205304',
    vacacyNumber: 'V001',
    title: 'AI',
    dateOfApplicant: '8-7-2019',
    status: 'Processing',
    experience: 'Junior',
    nameOfTheInterviewer: 'Ho Chi Minh',
    dateScheduled: '18-7-2019',
    start: '11:00 AM',
    end: '11:30 AM'
  },
  {
    id : '15130125' ,
    name: 'Nhan' ,
    email: '...@gmail.com',
    phone: '093205304',
    vacacyNumber: 'V001',
    title: 'AI',
    dateOfApplicant: '8-7-2019',
    status: 'Processing',
    experience: 'Junior',
    nameOfTheInterviewer: 'Ho Chi Minh',
    dateScheduled: '18-7-2019',
    start: '11:00 AM',
    end: '11:30 AM'
  }
]
