import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {apiRoot} from '../app.component';

@Injectable({providedIn: 'root'})
export class PositionService {
  constructor(private httpClient: HttpClient) {
  }

  getAllPosition() {
    return this.httpClient.get(`${apiRoot}/titleList`);
  }
}
