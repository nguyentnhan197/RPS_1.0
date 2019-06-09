import {User} from "./user.model";
import {Department} from "./department.model";
import {Position} from "./position.model";

export class Vacancy  {
  public  idVacancy: number;
 

  public  ownedBy: User;

  public  position: Position;
  public  description: string;
   public  dateClose: any;
  public requirement: string;

  //
  // public vacancyName: string;
  public experience: string;
  public language: string;
  public gender: string;
  public degree: string;
  public typeOfStaff: string;
  //nhan
  public experience: string;
  public language: string;
  public gender: string;
  public degree: string;
  public typeOfStaff: string;

}
