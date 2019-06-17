import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {forEach} from '@angular/router/src/utils/collection';
import {map} from 'rxjs/operators';
// import {viewVacancy} from '../carrer/carrer.component';
import {VacancyNhan} from '../model/vacancyNhan';
// import {viewVacancy} from '../view-vacancy/view-vacancy.component';

import {vacancies} from '../carrer/carrer.component';
import {apiRoot} from "../app.component";

@Injectable()
export class CarrerService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  // }

  getAllVacancy() {
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user:secret123') });
    //
    return this.httpClient.get(`${apiRoot}/vacancys`);
  }

  createVacancy(vacancy: VacancyNhan) {
    return this.httpClient.post<VacancyNhan>(`${apiRoot}/addVacancy` , vacancy);
  }

  // createVacancy(vacancy: Vacancy) {
  //   let body = JSON.parse(JSON.stringify(vacancy))
  //   if (vacancy.idVacancy) {
  //     return this.httpClient.put('http://localhost:8080/RecruitmentProcessSystem/create-vacancy' + vacancy.idVacancy, body)
  //   } else {
  //     return this.httpClient.get('http://localhost:8080/RecruitmentProcessSystem/create-vacancy', body)
  //   }
  // }

  // getAllVacancy(){
  //   return this.httpClient.get('http://localhost:8080/RecruitmennpmtProcessSystem/')
  // }
  // getVacancyById(id): Observable<VacancyNhan> {
  //   return of(vacancies.find(vacancy => vacancy.idVacancy == id));
  //
  // }
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

