import { Component, OnInit, ViewChild } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { StatusSolicitation, solicitationStatusLabel } from 'src/app/modules/shared/enum/status-solicitation';
import { UserType } from 'src/app/modules/shared/enum/user-type';
import { DateFormat } from 'src/app/modules/shared/functions/date-format';
import { Client } from 'src/app/modules/shared/model/client.model';
import { Solicitation } from 'src/app/modules/shared/model/solicitation.model';
import { ClientService } from 'src/app/Modules/shared/services/client.service';
import { SolicitationOperationComponent } from '../../../components/solicitation-operation/solicitation-operation.component';
import { SelectProfile } from '../../../functions/select-profile.function';
import { TransformDataColumns } from '../../../functions/transform-data-columns.function';
import { SolicitationColumn } from '../../../model/solicitation-column.model';
import { SolicitationFilter } from '../../../model/solicitation-filter.model';
import { SolicitationService } from '../../../services/solicitation.service';

@Component({
  selector: 'app-solicitation-in-review',
  templateUrl: './solicitation-in-review.component.html',
  styleUrls: ['./solicitation-in-review.component.css']
})
export class SolicitationInReviewComponent implements OnInit {

 private filter: SolicitationFilter; 
 private client: any;
 private provider: any;

  @ViewChild('modal') modal: SolicitationOperationComponent;

  constructor(private solicitationService: SolicitationService, private clientService: ClientService) { }

  ngOnInit() {
    this.setFilter();
    this.getSolicitations();
    this.clientService.getAllByUserType(UserType.accessor).subscribe(clients => {
      this.clients = clients;
    });
  }

  public solicitations: Solicitation[];
  private clients: Client[];
  public loading: boolean = false;

  public getColumns(): Array<PoTableColumn> {
    let column: PoTableColumn = this.provider ? { property: 'accessor', label: 'Acessor', width: '15%' } : 
    { property: 'provider', label: 'Fornecedor', width: '15%' };

    return [
      { property: 'status', label: 'Status', width: '15%' },
      { property: 'client', label: 'Cliente', width: '15%' },
      column,
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
    if(this.solicitations && this.clients) {
      if(this.client) {
        return this.solicitations.map(solicitation => {
          return { id: solicitation.id, status: solicitationStatusLabel.get(solicitation.status), client: solicitation.client.name, provider: solicitation.provider ? solicitation.provider.fantasyName : 'Não Requisitado',
            quantityRooms: solicitation.rooms.length, createdAt: DateFormat.format(solicitation.createdAt), rooms: TransformDataColumns.transformRoomColumns(solicitation.rooms, null ,['viewDescription']) , updatedAt: DateFormat.format(solicitation.updatedAt), options: ['edit', 'view'] }
        });
      } else {
        return this.solicitations.map(solicitation => {
          return { id: solicitation.id, status: solicitationStatusLabel.get(solicitation.status), client: solicitation.client.name, accessor: this.getNameAcessorById(solicitation.accessorId), provider:  solicitation.provider.fantasyName,
            quantityRooms: solicitation.rooms.length, createdAt: DateFormat.format(solicitation.createdAt), rooms: TransformDataColumns.transformRoomColumns(solicitation.rooms, null ,['viewDescription']) , updatedAt: DateFormat.format(solicitation.updatedAt), options: ['edit', 'view'] }
        });
      }
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

  private setFilter(): void {
    this.client = JSON.parse(localStorage.getItem('client'));
    this.provider = JSON.parse(localStorage.getItem('provider'));
    this.filter = SelectProfile.selectFilterByProfile(StatusSolicitation.inReview, this.client, this.provider);
  }

  private getNameAcessorById(id: string): string {
    return this.clients.find(c => c.id == id).name;
  }
}
