import { StatusSolicitation } from "../../shared/enum/status-solicitation";

export interface SolicitationColumn {
    id?: string;
    accessor?: string;
    provider?: string; 
    client?: string;
    status:string;
    rooms: number ;
    options: any;
}