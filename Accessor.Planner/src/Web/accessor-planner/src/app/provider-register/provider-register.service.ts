import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProviderRegister } from "../shared/model/provider-register.model";
import { HttpService } from "../shared/service/http.service";


@Injectable()
export class ProviderRegisterService{
    constructor(private http: HttpService){}

    url: string = "";

    public get(id: number): Observable<ProviderRegister>{
        return this.http.get<ProviderRegister>(this.url, id);
    }

    
    public login(providerRegister: ProviderRegister): Observable<ProviderRegister> {

         return this.http.post<ProviderRegister>(this.url, providerRegister);
    }
}
