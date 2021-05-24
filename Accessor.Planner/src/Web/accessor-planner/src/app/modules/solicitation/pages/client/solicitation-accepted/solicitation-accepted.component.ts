import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { solicitationStatusLabel, StatusSolicitation } from 'src/app/modules/shared/enum/status-solicitation';
import { UserType } from 'src/app/modules/shared/enum/user-type';
import { Client } from 'src/app/modules/shared/model/client.model';
import { Solicitation } from 'src/app/modules/shared/model/solicitation.model';
import { ClientService } from 'src/app/Modules/shared/services/client.service';
import { SolicitationColumn } from '../../../model/solicitation-column.model';
import { SolicitationFilter } from '../../../model/solicitation-filter.model';
import { SolicitationService } from '../../../services/solicitation.service';

@Component({
  selector: 'app-solicitation-accepted',
  templateUrl: './solicitation-accepted.component.html',
  styleUrls: ['./solicitation-accepted.component.css']
})
export class SolicitationAcceptedComponent implements OnInit {

  private filter: SolicitationFilter = {
    profileContextId: JSON.parse(localStorage.getItem('client')).id,
    status: StatusSolicitation.accept,
    userType: UserType.client
  }


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
      { property: 'rooms', label: 'Número de Comodos', width: '15%' },
      { property: 'accessor', label: 'Acessor', width: '15%' },
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
          },
        ]
      }
    ]
  }

  public getItems(): SolicitationColumn[] {
    return this.solicitations.map(solicitation => {
      return { id: solicitation.id, status: solicitationStatusLabel.get(solicitation.status),accessor: this.getNameAcessorById(solicitation.accessorId), rooms: solicitation.rooms.length, options: ['edit', 'view'] }
    });

  }

  private getNameAcessorById(id: string): string {
    return this.clients.find(c => c.id == id).name;
  }
}
