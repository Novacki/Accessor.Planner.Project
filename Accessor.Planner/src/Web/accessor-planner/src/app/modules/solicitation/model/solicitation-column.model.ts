import { StatusSolicitation } from "../../shared/enum/status-solicitation";

export interface SolicitationColumn {
    id?: string;
    accessor?: string;
    provider?: string; 
    client?: string;
    status:StatusSolicitation;
    rooms: number ;
    options: any;
}