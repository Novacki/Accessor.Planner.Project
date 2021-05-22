import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../model/client.model";
import { HttpService } from "./http.service";

@Injectable({
    providedIn: 'root'
})

export class ClientDataService {
    constructor(private http: HttpService) {}

    public get(userId: string): Observable<Client> {
        return this.http.getById<Client>(`Clients/${userId}`);
    }
}