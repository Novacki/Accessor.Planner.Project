import { SolicitationOperation } from "./solicitation-operation.model";

export interface SolicitationResponseValue extends SolicitationOperation {
    value: number;
}