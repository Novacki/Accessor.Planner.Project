import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PoTableColumn } from '@po-ui/ng-components';
import { Subject } from 'rxjs';
import { ShowInformationsComponent } from 'src/app/Modules/shared/components/show-informations/show-informations.component';
import { Room } from 'src/app/modules/shared/model/room.model';
import { RoomColumn } from '../../model/room-column.model';
import { SolicitationService } from '../../services/solicitation.service';
import { ModalRoomComponent } from './modal-room/modal-room.component';

@Component({
  selector: 'app-solicitation-form',
  templateUrl: './solicitation-form.component.html',
  styleUrls: ['./solicitation-form.component.css']
})
export class SolicitationFormComponent implements OnInit {

  constructor(private solicitationService: SolicitationService, private router: Router) { }
  public rooms: Room[] = [];
  public showRoom: Room;
  @ViewChild('information') information: ShowInformationsComponent;
  @ViewChild('edit') edit: ModalRoomComponent;

  ngOnInit(): void {
  }

  public loading: boolean = false;

  public getColumns(): Array<PoTableColumn> {
    return [
      { property: 'name', label: 'Comodo', width: '15%' },
      { property: 'metreage', label: 'Metragem', width: '15%' },
      { property: 'quantityFurnitures', label: 'Quantidade de Móveis', width: '15%' },
      { 
        property: 'descriptionIcon', 
        label: 'Descrição',
        width:"10%",
        type: 'icon',
        icons: [
          {
            action: this.showDescription.bind(this),
            icon: 'po-icon po-icon-eye',
            tooltip: 'Visualizar',
            value: 'viewDescription',
          },
        ]
      },
      {
        property: 'option',
        label: 'Opções',
        width:"10%",
        type: 'icon',
        icons: [
          {
            action: this.openEditRoom.bind(this),
            icon: 'po-icon po-icon-edit',
            tooltip: 'Editar',
            value: 'edit',
          },
          {
            action: this.removeRoom.bind(this),
            icon: 'po-icon po-icon-delete',
            tooltip: 'Remover',
            value: 'remove',
          },
        ]
      }
    ]
  }

  public addRoom(room: Room): void {
    this.rooms.push(room);
  }

  public editRoom(room: Room): void {
    this.showRoom.name = room.name;
    this.showRoom.metreage = room.metreage;
    this.showRoom.description = room.description;
    this.showRoom.furnitures = room.furnitures;
  }

  public getItems(): RoomColumn[] {
    return this.rooms.map(room => {
      return {  name: room.name, metreage: room.metreage, descriptionIcon:['viewDescription'], quantityFurnitures: room.furnitures.length, option: ['remove', 'edit'] };
    });
  }

  public registerSolicitation(): void {
    this.loading = true;
    this.solicitationService.create(this.rooms).subscribe(response => {
      console.log(response);
    },
    error => console.log(error)
    ,() => {
      this.loading = false;
      this.router.navigate(['../solicitations/on-hold'])
    });
  }

  private removeRoom(row: RoomColumn) {
   
    let roomResult = this.getRoomByRow(row);
 
    this.rooms.splice(this.rooms.indexOf(roomResult), 1);
  }
 

  private showDescription(row: RoomColumn) {
    this.showRoom = this.getRoomByRow(row);

    this.information.poModal.open();
  }

  private openEditRoom(row: RoomColumn) {
    this.showRoom = this.getRoomByRow(row);
    this.edit.setRoom = this.showRoom;
    this.edit.poModal.open();
  }

  private getRoomByRow(row: RoomColumn): Room {
    let room: Room = { metreage: row.metreage, name: row.name };
    return this.rooms.find(value => value.metreage == room.metreage && value.name == room.name
      && value.furnitures.length == row.quantityFurnitures );
  }
}
