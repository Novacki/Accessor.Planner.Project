import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../../shared/model/room.model';
import { Solicitation } from '../../shared/model/solicitation.model';
import { HttpService } from '../../shared/services/http.service';
import { SolicitationFilter } from '../model/solicitation-filter.model';
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

  public get(filter: SolicitationFilter):Observable<Solicitation[]> {
    return this.http.get<Solicitation>
      (
        `Solicitations/filter?profileContextId=${filter.profileContextId}&status=${filter.status}&userType=${filter.userType}`
      );
  }
}
