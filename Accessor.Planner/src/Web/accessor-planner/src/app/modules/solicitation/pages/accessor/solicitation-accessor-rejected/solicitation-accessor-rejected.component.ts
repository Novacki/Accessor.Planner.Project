import { Component, OnInit, ViewChild } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { solicitationStatusLabel, StatusSolicitation } from 'src/app/modules/shared/enum/status-solicitation';
import { UserType } from 'src/app/modules/shared/enum/user-type';
import { DateFormat } from 'src/app/modules/shared/functions/date-format';
import { Solicitation } from 'src/app/modules/shared/model/solicitation.model';
import { SolicitationOperationComponent } from '../../../components/solicitation-operation/solicitation-operation.component';
import { TransformDataColumns } from '../../../functions/transform-data-columns.function';
import { SolicitationColumn } from '../../../model/solicitation-column.model';
import { SolicitationFilter } from '../../../model/solicitation-filter.model';
import { SolicitationService } from '../../../services/solicitation.service';

@Component({
  selector: 'app-solicitation-accessor-rejected',
  templateUrl: './solicitation-accessor-rejected.component.html',
  styleUrls: ['./solicitation-accessor-rejected.component.css']
})
export class SolicitationAccessorRejectedComponent implements OnInit {

  private filter: SolicitationFilter = {
    profileContextId: JSON.parse(localStorage.getItem('client')).id,
    status: StatusSolicitation.reject,
    userType: UserType.accessor
  }

  @ViewChild('modal') modal: SolicitationOperationComponent;

  constructor(private solicitationService: SolicitationService) { }

  ngOnInit() {
    this.getSolicitations();
  }

  public solicitations: Solicitation[];
  public loading: boolean = false;

  public getColumns(): Array<PoTableColumn> {
    return [
      { property: 'status', label: 'Status', width: '15%' },
      { property: 'client', label: 'Cliente', width: '15%' },
      { property: 'provider', label: 'Fornecedor', width: '15%' },
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
        return { id: solicitation.id, status: solicitationStatusLabel.get(solicitation.status), client: solicitation.client.name, provider: solicitation.provider ? solicitation.provider.fantasyName : 'Não Requisitado',
          quantityRooms: solicitation.rooms.length, createdAt: DateFormat.format(solicitation.createdAt), rooms: TransformDataColumns.transformRoomColumns(solicitation.rooms, null ,['viewDescription']) , updatedAt: DateFormat.format(solicitation.updatedAt), options: ['edit', 'view'] }
      });
    }
  }
  
  private openModalOperation(row: SolicitationColumn): void {
    this.modal.openModal(row, this.filter);
  }

  public getSolicitations(): void {
    this.loading = true;
    this.solicitationService.get(this.filter).subscribe(response => {
      this.solicitations = response;
    },
    error => console.log(error),
    () => {
      this.loading = false;
    });
  }
}
