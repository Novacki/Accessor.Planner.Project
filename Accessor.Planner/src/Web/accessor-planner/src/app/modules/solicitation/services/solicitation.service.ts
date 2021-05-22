import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../../shared/model/room.model';
import { Solicitation } from '../../shared/model/solicitation.model';
import { HttpService } from '../../shared/services/http.service';
import { SolicitationRequest } from '../requests/solicitation-request';

@Injectable({
  providedIn: 'root'
})
export class SolicitationService {

  constructor(private http: HttpService) { }

  public create(rooms: Room[]): Observable<SolicitationRequest> {
    let user = JSON.parse(localStorage.getItem('auth'));
    return this.http.post<SolicitationRequest>('Solicitations/create', new SolicitationRequest(`${user.userId}`, rooms));
  }

  public get():Observable<Solicitation[]> {
    let user = JSON.parse(localStorage.getItem('auth'));
    return this.http.get<Solicitation>(`Solicitations/${user.userId}/solicitations`);
  }
}
