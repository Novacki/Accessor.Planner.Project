import { StatusSolicitation } from "../../shared/enum/status-solicitation";
import { UserType } from "../../shared/enum/user-type";

export class SolicitationFilter {
    profileContextId: string;
    status: StatusSolicitation;
    userType?: UserType;
}