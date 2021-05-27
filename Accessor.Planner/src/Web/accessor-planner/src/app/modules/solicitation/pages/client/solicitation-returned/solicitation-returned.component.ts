import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { solicitationStatusLabel, StatusSolicitation } from 'src/app/modules/shared/enum/status-solicitation';
import { UserType } from 'src/app/modules/shared/enum/user-type';
import { DateFormat } from 'src/app/modules/shared/functions/date-format';
import { Solicitation } from 'src/app/modules/shared/model/solicitation.model';
import { SolicitationColumn } from '../../../model/solicitation-column.model';
import { SolicitationFilter } from '../../../model/solicitation-filter.model';
import { SolicitationService } from '../../../services/solicitation.service';

@Component({
  selector: 'app-solicitation-returned',
  templateUrl: './solicitation-returned.component.html',
  styleUrls: ['./solicitation-returned.component.css']
})
export class SolicitationReturnedComponent implements OnInit {

  private filter: SolicitationFilter = {
    profileContextId: JSON.parse(localStorage.getItem('client')).id,
    status: StatusSolicitation.accept,
    userType: UserType.client
  }

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
      return { id: solicitation.id, status: solicitationStatusLabel.get(solicitation.status), 
        accessor: solicitation.accessorId, provider: solicitation.provider ? solicitation.provider.fantasyName : 'Não Acionado',
        quantityRooms: solicitation.rooms.length, createdAt: DateFormat.format(solicitation.createdAt), updatedAt: DateFormat.format(solicitation.updatedAt), options: ['edit', 'view'] }
    });
  }
}
