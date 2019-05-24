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
    ReviewApplicantComponent
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
