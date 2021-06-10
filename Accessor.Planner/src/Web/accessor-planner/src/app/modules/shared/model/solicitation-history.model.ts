import { StatusSolicitation } from "../enum/status-solicitation";
import { SubscribeType } from "../enum/subscribe-type.model";

export interface SolicitationHistory {
    accessorId?: string;
    providerId?: string;
    value?: number;
    status: StatusSolicitation;
    type: SubscribeType;
}