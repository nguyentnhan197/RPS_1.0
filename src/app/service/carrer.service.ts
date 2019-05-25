import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vacancy} from "../model/vacancy.model";
@Injectable({providedIn:'root'})
export class CarrerService{
constructor(
  private httpClient:HttpClient

){}

getAllVacancy(){
  return this.httpClient.get('http://localhost:8080/RecruitmentProcessSystem/')
}
createVacancy( vacancy: Vacancy){
  let body=JSON.parse(JSON.stringify(vacancy))
  if(vacancy.idVacancy){
    return this.httpClient.put('http://localhost:8080/RecruitmentProcessSystem/create-vacancy'+vacancy.idVacancy,body)
  }else{
  return this.httpClient.get('http://localhost:8080/RecruitmentProcessSystem/create-vacancy',body)
  }
}




}

