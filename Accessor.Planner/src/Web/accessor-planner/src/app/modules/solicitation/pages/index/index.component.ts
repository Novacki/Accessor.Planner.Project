import { Component, OnInit } from '@angular/core';
import { PoSelectOption, PoTableColumn } from '@po-ui/ng-components';
import { Solicitation } from 'src/app/modules/shared/model/solicitation.model';
import { coluns } from './index-solicitation.columns';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  columns: Array<PoTableColumn>;
  items: Array<any> = [{status:"teste", acessor:"teste", fornecedor:"teste", comodos:"teste"}]

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Delivered', value: 'delivered' },
    { label: 'Transport', value: 'transport' },
    { label: 'Production', value: 'production' }
  ];

  constructor() {}

  ngOnInit() {
  }

}
