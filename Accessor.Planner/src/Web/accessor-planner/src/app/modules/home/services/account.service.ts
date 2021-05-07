import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../../shared/model/user-login.model';
import { HttpService } from '../../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpService) { }
  
  private baseUrl: string = 'https://localhost:5561/api/Auth/'

  public singIn(user: UserLogin) : Observable<any>{
    return this.http.post<UserLogin>('SignIn', user, { responseType: 'text'} , this.baseUrl);
  }
}
