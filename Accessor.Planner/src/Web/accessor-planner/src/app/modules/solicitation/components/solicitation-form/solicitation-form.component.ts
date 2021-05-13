import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Room } from 'src/app/modules/shared/model/room.model';

@Component({
  selector: 'app-solicitation-form',
  templateUrl: './solicitation-form.component.html',
  styleUrls: ['./solicitation-form.component.css']
})
export class SolicitationFormComponent implements OnInit {

  constructor() { }
  public rooms: Room[] = [];

  ngOnInit(): void {
  } 

  public getColumns(): Array<PoTableColumn> {
    return [
      { property: 'name', label: 'Comodo' },
      { property: 'metrage', label: 'Metragem' }
    ]
  }

  addRoom(room: Room): void {
    console.log(room);
    this.rooms.push(room);
  }
}
