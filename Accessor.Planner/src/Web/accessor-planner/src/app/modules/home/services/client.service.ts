import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/service/http.service';
import { Client } from '../../shared/model/client.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpService) { }

  public create(client: Client): Observable<Client> {
    return this.http.post('Clients/create', client);
  }
}
