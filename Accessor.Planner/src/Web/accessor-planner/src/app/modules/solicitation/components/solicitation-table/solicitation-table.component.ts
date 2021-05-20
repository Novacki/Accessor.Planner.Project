import { Component, OnInit } from '@angular/core';
import { PoSelectOption, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-solicitation-table',
  templateUrl: './solicitation-table.component.html',
  styleUrls: ['./solicitation-table.component.css']
})
export class SolicitationTableComponent implements OnInit {

  constructor() { }

  public getColumns():Array<PoTableColumn> {
    return [
      { property: 'status', label: 'Status', width: '15%' },
      { property: 'accessor', label: 'Accessor', width: '15%' },
      { property: 'provider', label: 'Fornecedor', width: '15%' },
      { property: 'client', label: 'Cliente', width: '15%' },
      { property: 'rooms', label: 'Número de Comodos', width: '15%' },
      {
        property: 'option',
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
            icon: 'po-icon po-icon-delete',
            tooltip: 'Remover',
            value: 'remove',
          },
        ]
      }
    ]
  }


  ngOnInit(): void {
  }

}
