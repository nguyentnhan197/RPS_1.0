import {Injectable} from "@angular/core";
import {HttpClient, HttpHandler, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Vacancy} from "../model/vacancy.model";
import {forEach} from "@angular/router/src/utils/collection";
import {map} from 'rxjs/operators';
// import {viewVacancy} from "../carrer/carrer.component";
import {VacancyNhan} from "../model/vacancyNhan";
import {viewVacancy} from "../view-vacancy/view-vacancy.component";

// import {vacancies} from "../carrer/carrer.component";

@Injectable()
export class CarrerService {
  // apiRoot: string='http://localhost:8080/RecruitmentProcessSystem/carrer/'

  // constructor(
    // private httpClient: HttpClient,
  // ) {
  // }

  // getAllVacancy() {
  //   return this.httpClient.get('http://localhost:8080/RecruitmentProcessSystem/');
  // }

  // createVacancy(vacancy: Vacancy) {
  //   let body = JSON.parse(JSON.stringify(vacancy))
  //   if (vacancy.idVacancy) {
  //     return this.httpClient.put('http://localhost:8080/RecruitmentProcessSystem/create-vacancy' + vacancy.idVacancy, body)
  //   } else {
  //     return this.httpClient.get('http://localhost:8080/RecruitmentProcessSystem/create-vacancy', body)
  //   }
  // }

  // getAllVacancy(){
  //   return this.httpClient.get('http://localhost:8080/RecruitmentProcessSystem/')
  // }
  getVacancyById(id): Observable<VacancyNhan> {
    return of(viewVacancy.find(vacancy => vacancy.idVacancy == id));

  }
  // getVacancyById(idVacancy: string): Observable<Vacancy>{
 //    let httpHeaders= new HttpHeaders().set('Accept','application/json');
 //
 // return this.httpClient.get<Vacancy>(this.apiRoot+'?idVacancy='+idVacancy,{headers:httpHeaders,responseType:'json'});
// getVacancyById(idVacancy:number| string){
//     return this.getAllVacancy().pipe(
//       map((vacancys:Vacancy[])=>vacancys.find(vacancy=>vacancy.idVacancy===+idVacancy))
//     );

    // }




}

