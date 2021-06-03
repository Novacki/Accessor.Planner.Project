import { StatusSolicitation } from "../../shared/enum/status-solicitation";
import { RoomColumn } from "./room-column.model";

export interface SolicitationColumn {
    id?: string;
    accessor?: string;
    provider?: string; 
    client?: string;
    createdAt: string;
    updatedAt: string;
    status:string;
    rooms?: RoomColumn[];
    quantityRooms: number;
    options: any;
}