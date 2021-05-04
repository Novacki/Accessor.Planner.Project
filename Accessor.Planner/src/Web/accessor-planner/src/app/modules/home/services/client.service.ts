import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/service/http.service';
import { User } from '../../shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpService) { }

  public create(client: User): Observable<User> {
    return this.http.post('Client/create', client);
  }
}
