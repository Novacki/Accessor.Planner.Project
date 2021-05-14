import { Room } from "../../shared/model/room.model";

export class SolicitationRequest {
    constructor(public userId: string, public Rooms: Room[]){}
}