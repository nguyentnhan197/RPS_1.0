import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiRoot: string='http://localhost:8080/RecruitmentProcessSystem/'
authenticated=false;
  constructor(
    private httpClient:HttpClient
  ) {
  }

  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    const body={username}
    return this.httpClient.get(this.apiRoot+'user',{headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username',username);
          return userData;
        }
      )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
