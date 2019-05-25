import {User} from "./user.model";
import {Department} from "./department.model";
import {Position} from "./position.model";

export class Vacancy  {
  public  idVacancy: number;
  public  vacancyNumber:string;
  public  dateCreated:string;
<<<<<<< HEAD


  public  user: User;

  public  state:string;


  public  position: Position;

  public  description: string;
  public  numberOpening:number;


  public  department:Department;

=======
  public  user: any;
  public  state:string;
  public  position: any;
  public  description: string;
  public  numberOpening:number;
  public  department:any;
>>>>>>> 3cdf2571752420418f4a400d0fef6b2f9660ed4c
  public  dateClose: string;
  public requirement: string;
  public offer:string;
}
