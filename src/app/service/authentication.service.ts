import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user.model";
import {map} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiRoot: string = 'http://localhost:8080/RecruitmentProcessSystem'
  authenticated = false;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private httpClient: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public getCurrentUserValue(): User {
    // console.log('parse json in USER'+JSON.stringify(this.currentUserSubject.value));
    return this.currentUserSubject.value;
  }

  authenticate(username, password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.httpClient.get(this.apiRoot + '/user', {headers}).pipe(
      map(
        userData => {

          sessionStorage.setItem('token',
            btoa(username + ':' + password));
          sessionStorage.setItem('username',username);
          localStorage.setItem('currentUser', JSON.stringify(userData));
          console.log('userdata'+JSON.stringify(userData));
          return userData;
        }
      )
    );
  }

  getToken() {
return sessionStorage.getItem('token');

  }

getUsername(){
    return sessionStorage.getItem('username');
}
// getCurrentUser():Observable<User>{
//  var currentUser=JSON.parse( sessionStorage.getItem('currentUser'));
//  return currentUser;
//
// }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}

export class Account {
  username: string;
  password: string;
}
