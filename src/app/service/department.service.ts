import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
@Injectable({providedIn:'root'})
export class DepartmentService{
  constructor(private httpClient:HttpClient){}


  getAllDepartment(){
    return this.httpClient.get('http://localhost:8080/RecruitmentProcessSystem/departmentList')
  }

}
