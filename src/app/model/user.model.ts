import {Department} from "./department.model";
import {Position} from "./position.model";

export class User {
  public idUser: number;
  public userNumber: string;
  public fullName: string;
  public email: string;
  public username: string;
  public password: string;
  public  position: Position;
  public  department: Department;
  public  avatar: string;
  public  birthday: string;
  public  gender: boolean ;
  public  phone: string;
  public  address: string;
  public roles:[string];
  public constructor(init?: Partial<User >) {
    Object.assign(this, init);
  }
}
