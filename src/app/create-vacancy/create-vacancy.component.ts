import { Component, OnInit } from '@angular/core';
import {CarrerService} from "../service/carrer.service";
import {Validators} from "@angular/forms";
import {Vacancy} from "../model/vacancy.model";
import {Position} from "../model/position.model";
import {PositionService} from "../service/position.service";
import {DepartmentService} from "../service/department.service";
import {Department} from "../model/department.model";



@Component({
  selector: 'app-create-vacancy',
  templateUrl: './create-vacancy.component.html',
  styleUrls: ['./create-vacancy.component.scss']
})
export class CreateVacancyComponent implements OnInit {
  vacancy= new Vacancy();
  varcancys: Vacancy[];
  submitted= false;
  positionList: Position[];
  departmentList: Department[]
  constructor(private carrerService: CarrerService,
              private positionService: PositionService,
              private departmentService: DepartmentService,
              ) { }

  ngOnInit() {
    this.getPositionLst();
    this.getDepartmentList();
  }

  onsubmit(){this.submitted=true;}
  createVacancy(){


    this.carrerService.createVacancy(this.vacancy).subscribe(response=>{this.getAllVacancy()});
  }
 getAllVacancy(){
    this.carrerService.getAllVacancy().subscribe((data:Vacancy[])=>{this.varcancys=data});

  }
  getPositionLst(){
    this.positionService.getAllPosition().subscribe((dataDB:Position[])=>{this.positionList=dataDB});
  }
  getDepartmentList(){this.departmentService.getAllDepartment().subscribe((data:Department[])=>{this.departmentList=data});}



  // private  reset(){
  //   this.vacancy.idVacancy=null;
  //   this.vacancy.dateClose=null;
  //   this.vacancy.dateCreated=null;
  //   this.vacancy.department=null;
  //   this.vacancy.description=null;
  //   this.vacancy.numberOpening=null;
  //   this.vacancy.position=null;
  //   this.vacancy.state=null;
  //   this.vacancy.user=null;
  //   this.vacancy.vacancyNumber=null;
  //
  // }
}
