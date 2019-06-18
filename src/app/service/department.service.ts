import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {apiRoot} from '../app.component';
import {Department} from '../model/department.model';

@Injectable({providedIn: 'root'})
export class DepartmentService {
  constructor(private httpClient: HttpClient) {
  }


  getAllDepartment() {
    return this.httpClient.get<Department[]>(`${apiRoot}/departmentList`);
  }
  getIdByName(name: string): number {
    return 0;
  }

}
