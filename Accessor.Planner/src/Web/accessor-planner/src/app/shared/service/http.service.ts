import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable()
export class HttpService{
    constructor(private http: HttpClient){}

    baseUrl: string = "";

    public get<T>(url: string, id: number): Observable<T>{
        return this.http.get<T>(`${this.baseUrl}/${url}/${id}`);
    }

    public post<T>(url: string, value: T): Observable<T>{
        return this.http.post<T>(`${this.baseUrl}/${url}`, value);
    }

    // public login(login: Login): Observable<boolean> {

    //     return 
    // }
}

