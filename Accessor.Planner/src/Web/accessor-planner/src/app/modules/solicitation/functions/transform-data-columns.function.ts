import { Furniture } from "../../shared/model/furniture.model";
import { Room } from "../../shared/model/room.model";
import { FurnitureColumn } from "../model/furniture-column.model";
import { RoomColumn } from "../model/room-column.model";

export class TransformDataColumns {
    public static transformRoomColumns(rooms: Room[], descriptionIcon?: any, options?: any) : RoomColumn[] {
        return rooms.map(room => {
          return { id: room.id, name: room.name, descriptionIcon: descriptionIcon, description: room.description, 
                quantityFurnitures: room.furnitures.length, furnitures: this.transformFurnituresColumns(room.furnitures), metreage: room.metreage, option: options }
        });
    }

    public static transformFurnituresColumns(furnitures: Furniture[], descriptionIcon?: any, options?: any): FurnitureColumn[] {
        return furnitures.map(furniture => {
            return {id: furniture.id,  name: furniture.name, height: furniture.height, width: furniture.width ,length: furniture.length, descriptionIcon: descriptionIcon, option: options }
        });
    }
}