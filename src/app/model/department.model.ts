export class Department {
  idDepartment: number;
  departmentName: string;
  public constructor(init?: Partial<Department >) {
    Object.assign(this, init);
  }


}
