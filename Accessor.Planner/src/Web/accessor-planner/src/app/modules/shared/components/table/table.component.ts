import { Component, Input, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() columns: Array<PoTableColumn>;
  @Input() items: Array<PoTableColumn>;
  @Input() height: number;

  constructor() { }

  

  ngOnInit(): void {
  }
}
