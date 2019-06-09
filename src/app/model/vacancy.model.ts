import {User} from "./user.model";
import {Department} from "./department.model";
import {Position} from "./position.model";

export class Vacancy  {
  public  idVacancy: number;
  public  vacancyNumber:string;
  public  dateCreated:string;
  public  ownedBy: User;
  public  state:string;
  public  position: Position;
  public  description: string;
  public  numberOpening:number;
  public  department:Department;
  public  dateClose: any;
  public requirement: string;
  public offer:string;
  //nhan
  public experience: string;
  public language: string;
  public gender: string;
  public degree: string;
  public typeOfStaff: string;

}
