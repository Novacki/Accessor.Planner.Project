import { Injectable } from '@angular/core';
import { Solicitation } from '../../shared/model/solicitation.model';
import { HttpService } from '../../shared/services/http.service';
import { SolicitationRequest } from '../requests/solicitation-request';

@Injectable({
  providedIn: 'root'
})
export class SolicitationService {

  constructor(private http: HttpService) { }

  public create(solicitation: Solicitation) {
    this.http.post('create-solicitation', new SolicitationRequest('', solicitation.rooms));
  }
}
