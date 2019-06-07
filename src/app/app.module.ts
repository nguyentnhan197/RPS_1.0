import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CreateVacancyComponent } from './create-vacancy/create-vacancy.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CreateApplicantComponent } from './create-applicant/create-applicant.component';
import { SearchApplicantComponent } from './search-applicant/search-applicant.component';
import { ViewApplicantComponent } from './view-applicant/view-applicant.component';
import { CarrerComponent } from './carrer/carrer.component';
import { AppRoutingModule } from './app-routing.module';
import { ReviewApplicantComponent } from './review-applicant/review-applicant.component';
import {CarrerService} from "./service/carrer.service";
import {HttpClientModule} from "@angular/common/http";
import { DetailCarerComponent } from './carrer/detail-carrer/detail-carer.component';
import { SystemComponent } from './system/system.component';
import { ChangedPasswordComponent } from './system/changed-password/changed-password.component';
import { ProfileComponent } from './system/profile/profile.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { ManpowerRequestComponent } from './recruitment/manpower-request/manpower-request.component';
import { ManpowerRequestManagerComponent } from './recruitment/manpower-request-manager/manpower-request-manager.component';
import { ApplicantApprovalComponent } from './recruitment/applicant-approval/applicant-approval.component';
import { ViewVacancyComponent } from './view-vacancy/view-vacancy.component';
import { ViewReviewApplicantComponent } from './view-review-applicant/view-review-applicant.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateVacancyComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CreateApplicantComponent,
    SearchApplicantComponent,
    ViewApplicantComponent,
    CarrerComponent,
    ReviewApplicantComponent,
    DetailCarerComponent,
    SystemComponent,
    ChangedPasswordComponent,
    ProfileComponent,
    RecruitmentComponent,
    ManpowerRequestComponent,
    ManpowerRequestManagerComponent,
    ApplicantApprovalComponent,
    ViewVacancyComponent,
    ViewReviewApplicantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CarrerService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
