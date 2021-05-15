import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var user = JSON.parse(localStorage.getItem('auth'));

    const dupReq = req.clone({
      headers: req.headers.set('authorization', (user && user.token) ? 'Bearer ' + user.token : ''),
    });

    return next.handle(dupReq);
  }
}
