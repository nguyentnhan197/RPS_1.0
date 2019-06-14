import {User} from "./user.model";
import {Department} from "./department.model";
import {Position} from "./position.model";

export class VacancyNhan  {
  public  slOpening:number;
  public  idVacancy: number;
  public offer:string;
  public  vacancyNumber:string;
  public  dateCreated:string;
  public  ownedBy: any;

  public  position: Position;
  public  state:string;
  public  description: string;

  public  department:Department;
  public  dateClose: any;
  public requirement: string;

  //nhan
  public experience: string;
  public language: string;
  public gender: string;
  public degree: string;
  public typeOfStaff: string;

}
