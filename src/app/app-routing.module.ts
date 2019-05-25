import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarrerComponent} from "./carrer/carrer.component";
import {RouterModule, Routes} from "@angular/router";
import {ViewApplicantComponent} from "./view-applicant/view-applicant.component";
import {CreateApplicantComponent} from "./create-applicant/create-applicant.component";
import {CreateVacancyComponent} from "./create-vacancy/create-vacancy.component";
import {LoginComponent} from "./login/login.component";
import {ReviewApplicantComponent} from "./review-applicant/review-applicant.component";

const routes: Routes = [
  { path: '', component: CarrerComponent },
  { path: 'carrer', component: CarrerComponent },
  { path: 'view-applicant', component: ViewApplicantComponent },
  { path: 'hr/create-applicant', component: CreateApplicantComponent },
  { path: 'hr/create-vacancy', component: CreateVacancyComponent },
  { path:'interviewer/review-applicant', component: ReviewApplicantComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
