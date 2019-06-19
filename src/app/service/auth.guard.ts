import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {state} from '@angular/animations';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  list: any;

  constructor(
    router: Router,
    protected authenticationService: AuthenticationService
  ) {
  }

  // tslint:disable-next-line:no-shadowed-variable
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('authhhhhhhhhhhhhhh');
    const currentUser = this.authenticationService.getCurrentUserValue();
    // console.log(this.authenticationService.getUsername());
    console.log(' la usermodel' + currentUser);   // check if route is restricted by role

    if (route.data.roles === currentUser.roles[0]) {
      if (this.authenticationService.authenticated && currentUser) {
        console.log(route.data.role);
        return true;
      }
      // console.log(role);


    }


  }
}




// not logged in so redirect to login page with the return url
// this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
// return false;
// }
// }
