import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { HistSolicitationDataSource, HistSolicitationItem } from './hist-solicitation-datasource';

@Component({
  selector: 'app-hist-solicitation',
  templateUrl: './hist-solicitation.component.html',
  styleUrls: ['./hist-solicitation.component.css']
})
export class HistSolicitationComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<HistSolicitationItem>;
  dataSource: HistSolicitationDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['datadeAlteracao', 'status', 'nomeFornecedor', 'orcamento'];

  constructor() {
    this.dataSource = new HistSolicitationDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
