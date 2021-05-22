import { Component, Input, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';


@Component({
  selector: 'app-solicitation-table',
  templateUrl: './solicitation-table.component.html',
  styleUrls: ['./solicitation-table.component.css']
})
export class SolicitationTableComponent implements OnInit {

  @Input() columns: Array<PoTableColumn>;
  @Input() items: Array<PoTableColumn>;

  constructor() { }

  

  ngOnInit(): void {
  }

}
