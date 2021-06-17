import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../../shared/model/room.model';
import { Solicitation } from '../../shared/model/solicitation.model';
import { HttpService } from '../../shared/services/http.service';
import { SolicitationFilter } from '../model/solicitation-filter.model';
import { SolicitationOperation } from '../model/solicitation-operation.model';
import { SolicitationResponseValue } from '../model/solicitation-response-value.model';
import { SolicitationResponse } from '../model/solicitation-response.model';
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

  public update(id: string, rooms: Room[]): Observable<SolicitationRequest> {
    return this.http.put<SolicitationRequest>(`Solicitations/update/${id}`, new SolicitationRequest(`${this.user.userId}`, rooms));
  }

  public get(filter: SolicitationFilter):Observable<Solicitation[]> {
    return this.http.get<Solicitation>
      (
        `Solicitations/filter?profileContextId=${filter.profileContextId}&status=${filter.status}&userType=${filter.userType}`
      );
  }

  public getById(id: string):Observable<Solicitation> {
    return this.http.getById<Solicitation>(`Solicitations/solicitation/${id}`);
  }

  public approve(solicitation: SolicitationOperation): Observable<SolicitationOperation> {
    return this.http.put<SolicitationOperation>(`Solicitations/approve`, solicitation);
  }

  public reject(solicitation: SolicitationResponse): Observable<SolicitationResponse> {
    return this.http.put<SolicitationResponse>(`Solicitations/reject`, solicitation);
  }

  public done(solicitation: SolicitationResponseValue): Observable<SolicitationResponseValue> {
    return this.http.put<SolicitationResponseValue>(`Solicitations/done`, solicitation);
  }

  public cancel(solicitation: SolicitationResponse): Observable<SolicitationResponse> {
    return this.http.put<SolicitationResponse>(`Solicitations/cancel`, solicitation);
  }

  public cancelAccessor(solicitation: SolicitationResponse): Observable<SolicitationResponse> {
    return this.http.put<SolicitationResponse>(`Solicitations/cancel-accessor`, solicitation);
  }

  public cancelProvider(solicitation: SolicitationResponse): Observable<SolicitationResponse> {
    return this.http.put<SolicitationResponse>(`Solicitations/cancel-provider`, solicitation);
  }

  public accessorAccept(id: string): Observable<string> {
    return this.http.put<string>(`Solicitations/${this.user.userId}/accept-accessor/${id}`);
  }

  public accessorSend(id: string): Observable<string> {
    return this.http.put<string>(`Solicitations/${this.user.userId}/send-accessor/${id}`);
  }

  public providerAccept(solicitation: SolicitationOperation): Observable<SolicitationOperation> {
    return this.http.put<SolicitationOperation>(`Solicitations/accept-provider`, solicitation);
  }

  public providerSend(solicitation: SolicitationResponseValue): Observable<SolicitationOperation> {
    return this.http.put<SolicitationOperation>(`Solicitations/send-provider`, solicitation);
  }
}
