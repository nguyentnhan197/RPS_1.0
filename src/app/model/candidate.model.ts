import {ScheduleInterviewDetails} from "./schedule-interview-details.model";
import {VacancyNhan} from "./vacancyNhan";

export class Candidate{
  idApplicantVacancy: number;
  applicantVacancy:string;
  applicantVacancyName: string;
  emailApplicant:string;
  vacancy: VacancyNhan;
  dateOnApplicantVacancy: string;
  state: string;
  cv: string;
  scheduleInterviewDetails: ScheduleInterviewDetails;



  // id: string;
  // name: string;
  // email: string;
  // phone: string;
  // vacacyNumber: string;
  // title: string;
  // dateOfApplicant: any;
  // status: string;
  // experience: number;
  // nameOfTheInterviewer: string;
  // dateScheduled: any;
  // start: any;
  // end: any;
}
