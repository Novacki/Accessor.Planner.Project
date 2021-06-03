import { HttpHeaders } from '@angular/common/http';
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
  
  private readonly user: any = JSON.parse(localStorage.getItem('auth'));

  public create(rooms: Room[]): Observable<SolicitationRequest> {
    return this.http.post<SolicitationRequest>('Solicitations/create', new SolicitationRequest(`${this.user.userId}`, rooms));
  }

  public get(filter: SolicitationFilter):Observable<Solicitation[]> {
    return this.http.get<Solicitation>
      (
        `Solicitations/filter?profileContextId=${filter.profileContextId}&status=${filter.status}&userType=${filter.userType}`
      );
  }

  public approve(id: string): Observable<void> {
    return this.http.put<void>(`Solicitations/${this.user.userId}/approve/${id}`);
  }

  public reject(id: string, reason: string): Observable<string> {
    return this.http.put<string>(`Solicitations/${this.user.userId}/reject/${id}`, reason);
  }

  public cancel(id: string, reason: string): Observable<string> {
    return this.http.put<string>(`Solicitations/${this.user.userId}/cancel/${id}`);
  }

  public accept(id: string): Observable<string> {
    return this.http.put<string>(`Solicitations/${this.user.userId}/accept/${id}`);
  }

  public send(id: string): Observable<string> {
    return this.http.put<string>(`Solicitations/${this.user.userId}/send/${id}`);
  }
}
