import { SolicitationResponse } from "./solicitation-response.model";

export interface SolicitationResponseValue extends SolicitationResponse {
    value?: number;
    solicitationEndDate?: Date;
}