import { StatusSolicitation } from "../enum/status-solicitation";
import { Client } from "./client.model";
import { Provider } from "./provider.model";
import { Room } from "./room.model";
import { SolicitationHistory } from "./solicitation-history.model";

export interface Solicitation {
    id?: string;
    accessorId?: string;
    provider?: Provider;
    createdAt: Date; 
    updatedAt: Date;
    client: Client;
    solicitationEndDate?: Date;
    status: StatusSolicitation;
    solicitationHistories?: SolicitationHistory[];
    rooms: Room[];
}
