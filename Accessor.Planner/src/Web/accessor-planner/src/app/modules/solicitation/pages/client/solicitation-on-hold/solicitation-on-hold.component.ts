import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent, PoTableColumn } from '@po-ui/ng-components';
import { solicitationStatusLabel, StatusSolicitation } from 'src/app/modules/shared/enum/status-solicitation';
import { UserType } from 'src/app/modules/shared/enum/user-type';
import { DateFormat } from 'src/app/modules/shared/functions/date-format';
import { Room } from 'src/app/modules/shared/model/room.model';
import { Solicitation } from 'src/app/modules/shared/model/solicitation.model';
import { SolicitationOperationComponent } from '../../../components/solicitation-operation/solicitation-operation.component';
import { TransformDataColumns } from '../../../functions/transform-data-columns.function';
import { RoomColumn } from '../../../model/room-column.model';
import { SolicitationColumn } from '../../../model/solicitation-column.model';
import { SolicitationFilter } from '../../../model/solicitation-filter.model';
import { SolicitationService } from '../../../services/solicitation.service';

@Component({
  selector: 'app-solicitation-on-hold',
  templateUrl: './solicitation-on-hold.component.html',
  styleUrls: ['./solicitation-on-hold.component.css']
})
export class SolicitationOnHoldComponent implements OnInit {

  private filter: SolicitationFilter = {
    profileContextId: JSON.parse(localStorage.getItem('client')).id,
    status: StatusSolicitation.onHold,
    userType: UserType.client
  }

  @ViewChild('modal') modal: SolicitationOperationComponent;

  constructor(private solicitationService: SolicitationService) { }

  ngOnInit() {
    this.loading = true;
    this.solicitationService.get(this.filter).subscribe(response => {
      this.solicitations = response;
    },
      error => console.log(error),
      () => {
        this.loading = false;
      });
  }

  public solicitations: Solicitation[];
  public loading: boolean = false;

  public getColumns(): Array<PoTableColumn> {
    return [
      { property: 'status', label: 'Status', width: '15%' },
      { property: 'quantityRooms', label: 'Número de Comodos', width: '15%' },
      { property: 'createdAt', label: 'Data de Criação', width: '15%' },
      { property: 'updatedAt', label: 'Data de Atualização', width: '15%' },
      {
        property: 'options',
        label: 'Opções',
        width: "10%",
        type: 'icon',
        icons: [
          {
            icon: 'po-icon po-icon-edit',
            tooltip: 'Editar',
            value: 'edit',
          },
          {
            icon: 'po-icon po-icon-eye',
            tooltip: 'Visualizar',
            value: 'view',
            action: this.openModalOperation.bind(this)
          }
        ]
      }
    ]
  }


  public getItems(): SolicitationColumn[] {
    return this.solicitations.map(solicitation => {
      return { id: solicitation.id, status: solicitationStatusLabel.get(solicitation.status), 
        quantityRooms: solicitation.rooms.length, createdAt: DateFormat.format(solicitation.createdAt), rooms: TransformDataColumns.transformRoomColumns(solicitation.rooms, null ,['viewDescription']) , updatedAt: DateFormat.format(solicitation.updatedAt), options: ['edit', 'view'] }
    });
  }
  
  private openModalOperation(row: SolicitationColumn): void {
    this.modal.openModal(row);
  }

 
}
