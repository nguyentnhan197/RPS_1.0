import {User} from "./user.model";
import {Department} from "./department.model";
import {Position} from "./position.model";
import {Timestamp} from "rxjs";
import {Input} from "@angular/core";

export class VacancyNhan  {
  public  slOpening:number;
  public  idVacancy: number;
  public offer:string;
  public  vacancyNumber:string;
  public  dateCreated:Date = new Date(Date.now());
  @Input()ownedBy: User;

  @Input()  position: Position;
  public  state:string;
  public  description: string;

  @Input() department:Department;
  public  dateClose: Date= new Date(Date.now());
  public requirement: string;

  //nhan
  public experience: number;
  public language: string;
  public gender: boolean;
  public degree: string;
  public typeOfStaff: string;
  public constructor(init?: Partial<VacancyNhan >) {
    Object.assign(this, init);

  }
}
// type RecursivePartial<T> = {
//   [P in keyof T]?: RecursivePartial<T[P]>;
// };
