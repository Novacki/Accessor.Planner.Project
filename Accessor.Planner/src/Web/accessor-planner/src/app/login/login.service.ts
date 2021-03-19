import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../shared/model/login.model";
import { HttpService } from "../shared/service/http.service";


@Injectable()
export class LoginService{
    constructor(private http: HttpService){}

    url: string = "";

    public get(id: number): Observable<Login>{
        return this.http.get<Login>(this.url, id);
    }

    
    public login(login: Login): Observable<Login> {

         return this.http.post<Login>(this.url, login);
    }
}

