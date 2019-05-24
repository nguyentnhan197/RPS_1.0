import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({providedIn:'root'})
export class CarrerService{
constructor(
  private httpClient:HttpClient

){}

getAllVacancy(){
  return this.httpClient.get('http://localhost:8080/RecruitmentProcessSystem/')
}




}

