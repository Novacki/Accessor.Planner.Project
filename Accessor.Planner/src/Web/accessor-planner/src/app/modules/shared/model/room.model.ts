import { Furniture } from "./furniture.model";

export class Room {
    id?: number;
    name: string;
    metreage: number;
    description?: string;
    furnitures?: Furniture[];
}