import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('authhhhhhhhhhhhhhh');
    const currentUser = this.authenticationService.getCurrentUserValue();
    console.log(this.authenticationService.getUsername());
    console.log(JSON.stringify(currentUser.username));
    if (this.authenticationService.authenticated&& currentUser&&currentUser.password) {
     // check if route is restricted by role
      for(let role in currentUser.roles){
        if(role === route.data.role){
          console.log(role);
          console.log(route.data.role);
          return true;
        }


      }


    }

    // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    // return false;
  }
}
