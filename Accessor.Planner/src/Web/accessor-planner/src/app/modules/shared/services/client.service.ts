import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserType } from "../enum/user-type";
import { Client } from "../model/client.model";
import { HttpService } from "./http.service";

@Injectable({
    providedIn: 'root'
})

export class ClientService {
    constructor(private http: HttpService) {}

    public getByUserId(userId: string): Observable<Client> {
        return this.http.getById<Client>(`Clients/${userId}`);
    }

    public getAllByUserType(type: UserType): Observable<Client[]> {
        return this.http.get(`Clients/type/${type}`);
    }

    public create(client: Client): Observable<Client> {
        return this.http.post('Clients/create', client);
    }
}