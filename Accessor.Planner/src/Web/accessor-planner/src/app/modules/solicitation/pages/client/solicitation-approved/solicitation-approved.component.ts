import { Component, OnInit, ViewChild } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { solicitationStatusLabel, StatusSolicitation } from 'src/app/modules/shared/enum/status-solicitation';
import { UserType } from 'src/app/modules/shared/enum/user-type';
import { DateFormat } from 'src/app/modules/shared/functions/date-format';
import { Client } from 'src/app/modules/shared/model/client.model';
import { Solicitation } from 'src/app/modules/shared/model/solicitation.model';
import { ClientService } from 'src/app/Modules/shared/services/client.service';
import { SolicitationOperationComponent } from '../../../components/solicitation-operation/solicitation-operation.component';
import { TransformDataColumns } from '../../../functions/transform-data-columns.function';
import { SolicitationColumn } from '../../../model/solicitation-column.model';
import { SolicitationFilter } from '../../../model/solicitation-filter.model';
import { SolicitationService } from '../../../services/solicitation.service';

@Component({
  selector: 'app-solicitation-approved',
  templateUrl: './solicitation-approved.component.html',
  styleUrls: ['./solicitation-approved.component.css']
})
export class SolicitationApprovedComponent implements OnInit {

  private filter: SolicitationFilter = {
    profileContextId: JSON.parse(localStorage.getItem('client')).id,
    status: StatusSolicitation.approve,
    userType: UserType.client
  }

  @ViewChild('modal') modal: SolicitationOperationComponent;

  constructor(private solicitationService: SolicitationService, private clientService: ClientService) { }
  private clients: Client[];

  ngOnInit() {
    this.loading = true;
    this.solicitationService.get(this.filter).subscribe(response => {
      this.solicitations = response;
    },
    error => console.log(error),
    () => {
      this.loading = false;
    });

    this.clientService.getAllByUserType(UserType.accessor).subscribe(clients => {
      this.clients = clients;
    });
  }

  public solicitations: Solicitation[];
  public loading: boolean = false;

  public getColumns(): Array<PoTableColumn> {
    return [
      { property: 'status', label: 'Status', width: '15%' },
      { property: 'quantityRooms', label: 'Número de Comodos', width: '15%' },
      { property: 'accessor', label: 'Acessor', width: '15%' },
      { property: 'createdAt', label: 'Data de Criação', width: '15%' },
      { property: 'updatedAt', label: 'Data de Atualização', width: '15%' },
      {
        property: 'options',
        label: 'Opções',
        width: "10%",
        type: 'icon',
        icons: [
          {
            icon: 'po-icon po-icon-export',
            tooltip: 'Operações',
            value: 'view',
            action: this.openModalOperation.bind(this)
          }
        ]
      }
    ]
  }

  public getItems(): SolicitationColumn[] {
    if(this.solicitations) {
      return this.solicitations.map(solicitation => {
        return { id: solicitation.id, status: solicitationStatusLabel.get(solicitation.status), accessor: this.getNameAcessorById(solicitation.accessorId), 
          quantityRooms: solicitation.rooms.length, createdAt: DateFormat.format(solicitation.createdAt), rooms: TransformDataColumns.transformRoomColumns(solicitation.rooms, null ,['viewDescription']) , updatedAt: DateFormat.format(solicitation.updatedAt), options: ['edit', 'view'] }
      });
    }
  }

  private getNameAcessorById(id: string): string {
    return this.clients.find(c => c.id == id).name;
  }

  private openModalOperation(row: SolicitationColumn): void {
    this.modal.openModal(row);
  }

}
