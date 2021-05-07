import { UserLogin } from "./user-login.model";

export interface User extends UserLogin {
    userName: string;
}