import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../service/authentication.service';


@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available

    if (this.authenticationService.authenticated) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${this.authenticationService.getToken()}`
        }
      });
    }

    return next.handle(request);
  }
}
