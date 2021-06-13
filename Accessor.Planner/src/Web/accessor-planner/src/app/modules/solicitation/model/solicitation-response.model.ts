import { SolicitationOperation } from "./solicitation-operation.model";

export interface SolicitationResponse extends SolicitationOperation {
    reason?: string;
}