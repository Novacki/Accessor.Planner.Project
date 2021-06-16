import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoNotificationService, PoTableColumn } from '@po-ui/ng-components';
import { Subject } from 'rxjs';
import { ShowInformationsComponent } from 'src/app/Modules/shared/components/show-informations/show-informations.component';
import { Room } from 'src/app/modules/shared/model/room.model';
import { Solicitation } from 'src/app/modules/shared/model/solicitation.model';
import { RoomColumn } from '../../model/room-column.model';
import { SolicitationService } from '../../services/solicitation.service';
import { ModalRoomComponent } from './modal-room/modal-room.component';

@Component({
  selector: 'app-solicitation-form',
  templateUrl: './solicitation-form.component.html',
  styleUrls: ['./solicitation-form.component.css']
})
export class SolicitationFormComponent implements OnInit {

  constructor(
    private solicitationService: SolicitationService, 
    private router: Router,
    private poNotification: PoNotificationService,
    private activateRoute: ActivatedRoute ) { }

  public rooms: Room[] = [];
  public showRoom: Room;
  public solicitation: Solicitation;
  public buttonName = 'Cadastrar';

  @ViewChild('information') information: ShowInformationsComponent;
  @ViewChild('edit') edit: ModalRoomComponent;

  ngOnInit(): void {
    this.activateRoute.params.subscribe(val => {
      if(val.id != undefined) {
        this.loading = true;
        this.solicitationService.getById(val.id).subscribe(response => {
          this.buttonName = 'Editar';
          this.solicitation = response;
          this.rooms = response.rooms;
          this.loading = false;
        });
      }
    });
  }

  public loading: boolean = false;

  public getColumns(): Array<PoTableColumn> {
    return [
      { property: 'name', label: 'Comodo', width: '15%' },
      { property: 'metreage', label: 'M²', width: '15%' },
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
    this.poNotification.success(`Comodo adicionado com sucesso! ${room.name}`);
  }

  public editRoom(room: Room): void {
    this.showRoom.name = room.name;
    this.showRoom.metreage = room.metreage;
    this.showRoom.description = room.description;
    this.showRoom.furnitures = room.furnitures;
    this.poNotification.success(`Comodo editado com sucesso! ${room.name}`);
  }

  public getItems(): RoomColumn[] {
    return this.rooms.map(room => {
      return {  name: room.name, metreage: room.metreage, descriptionIcon:['viewDescription'], quantityFurnitures: room.furnitures.length, option: ['remove', 'edit'] };
    });
  }

  public registerSolicitation(): void {
    this.loading = true;
    if(this.solicitation) {
      this.solicitationService.update(this.solicitation.id, this.rooms).subscribe(response => {
        this.poNotification.success('Solicitação atualizada com sucesso!');
      },
      error => {
        this.poNotification.error('Erro ao atualizar a solicitação!');
        this.loading = false;
      },() => {
        this.loading = false;
        this.router.navigate(['../solicitations/on-hold'])
      });
    } else {
      this.solicitationService.create(this.rooms).subscribe(response => {
        this.poNotification.success('Solicitação criada com sucesso!');
      },
      error => {
        this.poNotification.error('Erro ao Salvar a solicitação!');
        this.loading = false;
      },() => {
        this.loading = false;
        this.router.navigate(['../solicitations/on-hold'])
      });
    }
  }

  private removeRoom(row: RoomColumn) {  
    let roomResult = this.getRoomByRow(row);
    this.rooms.splice(this.rooms.indexOf(roomResult), 1);
    this.poNotification.success('Comodo removido com sucesso!');
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
