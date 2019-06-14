import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // user = new user();
  credentials = {username: '', password: ''};
  error = ''
  invalidLogin = false

  constructor(private router: Router,
              private loginservice: AuthenticationService) {
  }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.credentials.username, this.credentials.password).subscribe(
        data => {
          if (data === this.credentials.username) {
            this.router.navigate(['/view-vacancy'])
            this.invalidLogin = false
          } else {
            this.error = 'Username or password invalid'
          }
        },
        error => {
          this.invalidLogin = true,
            this.error = error

        }
      )
    );

  }

}

// export class user{
//   username:string;
//   pass:string;
// }
