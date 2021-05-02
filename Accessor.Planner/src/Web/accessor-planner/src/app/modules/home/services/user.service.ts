import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }

  public Login(password: string, email: string) : string {
    
  }
}
