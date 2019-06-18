import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {apiRoot} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAllUser() {
    return this.httpClient.get(`${apiRoot}/users`);
  }
}
