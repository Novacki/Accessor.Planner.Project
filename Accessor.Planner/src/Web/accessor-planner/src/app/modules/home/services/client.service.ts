import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Client } from '../../shared/model/client.model';
import { HttpService } from '../../shared/services/http.service';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpService) { }

  public create(client: Client): Observable<Client> {
    return this.http.post('Clients/create', client);
  }
}
