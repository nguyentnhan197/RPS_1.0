import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Vacancy} from "../model/vacancy.model";
import {vacancies} from "../carrer/carrer.component";
@Injectable({providedIn:'root'})
export class CarrerService{
constructor(
  private httpClient:HttpClient

){}

  getAllVacancy(){
    return this.httpClient.get('http://localhost:8080/RecruitmentProcessSystem/')
  }
  getVacancyById(id) : Observable<Vacancy> {
    return of(vacancies.find(vacancy => vacancy.idVacancy == id));


  }




}

