import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRouterService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean  {
    if (!localStorage.getItem('auth')) {
      this.router.navigate(['/']);
    }
    return !!localStorage.getItem('auth');
  }

}
