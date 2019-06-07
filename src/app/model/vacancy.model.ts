import {User} from "./user.model";
import {Department} from "./department.model";
import {Position} from "./position.model";

export class Vacancy  {
  public  idVacancy: number;
  public  vacancyNumber: string;
  public  dateCreated: string;
  public  user: any;
  public  state: string;
  public  position: any;
  public  description: string;
  public  numberOpening: number;
  public  department: any;
  public  dateClose: any;
  public requirement: string;
  public offer: string;
  //
  // public vacancyName: string;
  public experience: string;
  public language: string;
  public gender: string;
  public degree: string;
  public typeOfStaff: string;
}
