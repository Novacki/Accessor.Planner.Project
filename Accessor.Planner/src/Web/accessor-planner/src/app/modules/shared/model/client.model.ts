import { UserType } from "../enum/user-type";
import { Addess } from "./addess.model";
import { User } from "./user.model";

export interface Client {
    name: string;
    phone: string;
    birthDate: Date;
    sex: string;
    cpf: string;
    type: UserType;
    user: User;
    addresses: Addess[];
}

