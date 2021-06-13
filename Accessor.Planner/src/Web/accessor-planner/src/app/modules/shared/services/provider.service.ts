import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '../../shared/model/provider.model';
import { HttpService } from '../../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor( private http: HttpService ) { }

  public create(provider: Provider) : Observable<Provider> {
    return this.http.post("Providers", provider);
  }

  public getByUserId(userId: string): Observable<Provider> {
    return this.http.getById<Provider>(`Providers/${userId}`);
  }

  public getAll(): Observable<Provider[]> {
    return this.http.getById<Provider[]>(`Providers`);
  }

  public getById(id: string): Observable<Provider> {
    return this.http.getById<Provider>(`Providers/me/${id}`);
  }

  public update(id: string, provider: Provider): Observable<Provider> {
    return this.http.put(`Providers/${id}`, provider);
  }
}
