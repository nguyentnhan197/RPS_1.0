import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.getCurrentUserValue();
    if (currentUser.authenticated) {
      let set = new Set();
      currentUser.authorities.forEach((authority:any)=>{
        set.add(authority.authority);
      });
      route.data.roles.valueOf().forEach(role=>{
        set.add(role);
      });
      console.log(set);
      if(set.size < currentUser.authorities.length + route.data.roles.length){
        return true;
      }
    }
  }
}
