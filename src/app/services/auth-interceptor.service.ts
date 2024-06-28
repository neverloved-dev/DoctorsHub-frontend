import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

@Injectable({providedIn:'root'})
export class UniversalAppInterceptor implements HttpInterceptor {

  constructor( ) { }
  authService = inject(AuthService);
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getJwtToken();
    req = req.clone({
      url:  req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(req);
  }
}