import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarrerService} from "../../service/carrer.service";
import {Vacancy} from "../../model/vacancy.model";
import { Location } from '@angular/common';
@Component({
  selector: 'app-detail-carer',
  templateUrl: './detail-carer.component.html',
  styleUrls: ['./detail-carer.component.scss']
})
export class DetailCarerComponent implements OnInit {
  vacacy :Vacancy;
  constructor(private  route: ActivatedRoute, private carrerService : CarrerService,  private location: Location) {

  }

  ngOnInit() {
    this.getVacacyById();
  }
  getVacacyById(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.carrerService.getVacancyById(id).subscribe(vacan => this.vacacy = vacan);
  }
  goBack(){
    this.location.back();
  }

}
