import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VacancyNhan} from '../model/vacancyNhan';
import {apiRoot} from '../app.component';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';


@Injectable()
export class CarrerService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Basic ${this.authenticationService.getToken()}`
  });
  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService
  ) {
  }



  getAllVacancy() {
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user:secret123') });
    //
    return this.httpClient.get(`${apiRoot}/vacancys`, {headers: this.headers});
  }
  deleteVacancy(idVacancy: number): Observable<any> {
    console.log(idVacancy);
    return this.httpClient.delete(`${apiRoot}/vacancys/${idVacancy}`, {headers: this.headers});

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

