import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserRegister } from "../shared/model/user-register.model";
import { HttpService } from "../shared/service/http.service";


@Injectable()
export class UserRegisterService{
    constructor(private http: HttpService){}

    url: string = "";

    public get(id: number): Observable<UserRegister>{
        return this.http.get<UserRegister>(this.url, id);
    }

    
    public login(providerRegister: UserRegister): Observable<UserRegister> {

         return this.http.post<UserRegister>(this.url, providerRegister);
    }
}
