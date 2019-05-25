import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
<<<<<<< HEAD
import {Observable} from "rxjs";
import {Vacancy} from "../model/vacancy.model";
=======
import {Observable, of} from "rxjs";
import {Vacancy} from "../model/vacancy.model";
import {vacancies} from "../carrer/carrer.component";
>>>>>>> 3cdf2571752420418f4a400d0fef6b2f9660ed4c
@Injectable({providedIn:'root'})
export class CarrerService{
constructor(
  private httpClient:HttpClient

){}

<<<<<<< HEAD
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
=======
  getAllVacancy(){
    return this.httpClient.get('http://localhost:8080/RecruitmentProcessSystem/')
  }
  getVacancyById(id) : Observable<Vacancy> {
    return of(vacancies.find(vacancy => vacancy.idVacancy == id));


  }
>>>>>>> 3cdf2571752420418f4a400d0fef6b2f9660ed4c




}

