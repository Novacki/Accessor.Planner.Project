import { StatusSolicitation } from "../enum/status-solicitation";
import { Client } from "./client.model";
import { Provider } from "./provider.model";
import { Room } from "./room.model";

export interface Solicitation {
    id?: string;
    accessorId?: string;
    provider?: Provider;
    createdAt: Date; 
    updatedAt: Date;
    client: Client;
    status:StatusSolicitation;
    rooms: Room[];
}