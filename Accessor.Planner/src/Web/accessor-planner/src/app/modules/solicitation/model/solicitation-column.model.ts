import { StatusSolicitation } from "../../shared/enum/status-solicitation";
import { RoomColumn } from "./room-column.model";
import { SolicitationHistoryColumn } from "./solicitation-history-column.model";

export interface SolicitationColumn {
    id?: string;
    accessor?: string;
    provider?: string; 
    client?: string;
    createdAt: string;
    updatedAt: string;
    status:string;
    rooms?: RoomColumn[];
    solicitationEndDate?: string;
    solicitationHistories?: SolicitationHistoryColumn[];
    quantityRooms: number;
    options: any;
}