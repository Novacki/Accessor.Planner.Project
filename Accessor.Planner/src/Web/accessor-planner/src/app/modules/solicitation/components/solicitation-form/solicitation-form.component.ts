import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoTableColumn } from '@po-ui/ng-components';
import { Subject } from 'rxjs';
import { Room } from 'src/app/modules/shared/model/room.model';
import { RoomColumn } from '../../model/room-column.model';
import { SolicitationService } from '../../services/solicitation.service';

@Component({
  selector: 'app-solicitation-form',
  templateUrl: './solicitation-form.component.html',
  styleUrls: ['./solicitation-form.component.css']
})
export class SolicitationFormComponent implements OnInit {

  constructor(private solicitationService: SolicitationService, private router: Router) { }
  public rooms: Room[] = [];

  ngOnInit(): void {
  }

  public loading: boolean = false;
  public getColumns(): Array<PoTableColumn> {
    return [
      { property: 'name', label: 'Comodo' },
      { property: 'metreage', label: 'Metragem' },
      {
        property: 'option',
        label: 'Opções',
        width:"10%",
        type: 'icon',
        icons: [
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

  addRoom(room: Room): void {
    this.rooms.push(room);
  }

  private removeRoom(row: RoomColumn) {
   let room: Room = { metreage: row.metreage, name: row.name };
   let roomResult = this.rooms.find(value => value.metreage == room.metreage && value.name == room.name);
   this.rooms.splice(this.rooms.indexOf(roomResult), 1);
  }

  public getItems(): RoomColumn[] {
    return this.rooms.map(room => {
      return {  name: room.name, metreage: room.metreage, option: ['remove'] };
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
      this.router.navigate(['../solicitations'])
    });
  }
}
