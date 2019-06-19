import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user.model';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {apiRoot} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated = false;
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;

  constructor(
    private httpClient: HttpClient
  ) {

  }


  public getCurrentUserValue(): User {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    console.log(this.currentUserSubject.value);
    return this.currentUserSubject.value;
  }

  authenticate(username, password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.httpClient.get(`${apiRoot}/user`, {headers}).pipe(
      map(
        userData => {

          sessionStorage.setItem('token',
            btoa(username + ':' + password));
          sessionStorage.setItem('username', username);
          localStorage.setItem('currentUser', JSON.stringify(userData));
          console.log('userdata' + JSON.stringify(userData));
          return userData;
        }
      )
    );
  }

  getToken() {
    return sessionStorage.getItem('token');

  }

  getUsername() {
    return sessionStorage.getItem('username');
  }

// getCurrentUser():Observable<User>{
//  var currentUser=JSON.parse( sessionStorage.getItem('currentUser'));
//  return currentUser;
//
// }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }

}

export class Account {
  username: string;
  password: string;
}
