import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token !== null) {
      //intercept the token in request
      const newReq = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        },
      });
      return next.handle(newReq);
    } else {
      return next.handle(req);
    }
  }
}
