import { StatusSolicitation } from "../enum/status-solicitation";
import { Client } from "./client.model";
import { Provider } from "./provider.model";
import { Room } from "./room.model";

export interface Solicitation {
    id?: string;
    accessorId?: string;
    provider?: Provider; 
    client: Client;
    status:StatusSolicitation;
    rooms: Room[];
}