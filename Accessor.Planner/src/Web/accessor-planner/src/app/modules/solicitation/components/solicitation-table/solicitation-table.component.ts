import { Component, OnInit } from '@angular/core';
import { PoSelectOption, PoTableColumn } from '@po-ui/ng-components';
import { Solicitation } from 'src/app/modules/shared/model/solicitation.model';
import { SolicitationColumn } from '../../model/solicitation-column.model';
import { SolicitationService } from '../../services/solicitation.service';

@Component({
  selector: 'app-solicitation-table',
  templateUrl: './solicitation-table.component.html',
  styleUrls: ['./solicitation-table.component.css']
})
export class SolicitationTableComponent implements OnInit {

  constructor(private solicitationService: SolicitationService) { }

  public solicitations: Solicitation[];

  public getColumns():Array<PoTableColumn> {
    return [
      { property: 'status', label: 'Status', width: '15%' },
      { property: 'accessor', label: 'Accessor', width: '15%' },
      { property: 'provider', label: 'Fornecedor', width: '15%' },
      { property: 'client', label: 'Cliente', width: '15%' },
      { property: 'rooms', label: 'Número de Comodos', width: '15%' },
      {
        property: 'options',
        label: 'Opções',
        width:"10%",
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
      return {status: solicitation.status, accessor: solicitation.accessorId, provider: 'Não Requisitado', 
        client: solicitation.client.name, rooms: solicitation.rooms.length, options: ['edit', 'view']}
    });
    
  }

  ngOnInit(): void {
    this.solicitationService.get().subscribe(response => {
      this.solicitations = response;
    })
  }

}
