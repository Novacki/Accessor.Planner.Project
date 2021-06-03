import { FurnitureColumn } from "./furniture-column.model";

export interface RoomColumn {
    id?:number;
    name: string;
    metreage: number;
    quantityFurnitures?: number;
    furnitures?: FurnitureColumn[];
    description?: string;
    descriptionIcon?: any;
    option: any;
}