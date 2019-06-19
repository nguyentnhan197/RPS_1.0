import { Component } from '@angular/core';
import {TranslateService} from './service/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
  }
  title = 'RecruitmentProcessSystemUI';
  setLang(lang: string) {
    console.log(lang);
    this.translate.use(lang);
  }
}

export const apiRoot = 'http://localhost:8080/RecruitmentProcessSystem';

