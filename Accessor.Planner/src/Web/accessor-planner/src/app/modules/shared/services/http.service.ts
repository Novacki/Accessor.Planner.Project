import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  private baseUrlAccessor = 'https://localhost:5001/api/v1/';
  private baseUrlIdentity = 'https://localhost:5561/api/';

  public get<T>(url: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrlAccessor}${url}`);
  }

  public post<T>(url: string, obj: T, options = {}, baseUrl: string = this.baseUrlAccessor): Observable<T> {
    return this.http.post<T>(`${baseUrl}${url}`, obj, options);
  }

  public put<T>(url: string, obj: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrlAccessor}${url}`, obj);
  }

  public delete<T>(url: string, obj: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrlAccessor}${url}`, obj);
  }
}
