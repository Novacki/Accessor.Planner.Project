import { Addess } from "./addess.model";
import { User } from "./user.model";

export interface Provider {
    id?: string;
    fantasyName: string;
    socialReason: string;
    cnpj: string;
    phone: string;
    user: User;
    address: Addess;
}