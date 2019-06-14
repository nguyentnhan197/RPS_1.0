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
  



}
