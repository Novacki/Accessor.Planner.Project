import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent, PoTableColumn } from '@po-ui/ng-components';
import { ShowInformationsComponent } from 'src/app/Modules/shared/components/show-informations/show-informations.component';
import { RoomColumn } from '../../model/room-column.model';
import { SolicitationColumn } from '../../model/solicitation-column.model';

@Component({
  selector: 'app-solicitation-operation',
  templateUrl: './solicitation-operation.component.html',
  styleUrls: ['./solicitation-operation.component.css']
})
export class SolicitationOperationComponent implements OnInit {


  constructor() { }

  @ViewChild('information') information: ShowInformationsComponent;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  
  ngOnInit(): void {
  }
  
  public solicitation: SolicitationColumn;
  public roomColumn: RoomColumn;

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Fechar',
    danger: true
  };

  closeModal() {
    this.poModal.close();
  }

  openModal(row: SolicitationColumn): void {
    this.solicitation = row;
    console.log(row);
    this.poModal.open();
  }

  public getColumnsRoom(): Array<PoTableColumn> {
    return [
      { property: 'name', label: 'Comodo', width: '11%' },
      { property: 'metreage', label: 'Metragem', width: '11%' },
      { property: 'quantityFurnitures', label: 'Quantidade de Móveis', width: '17%' },
      {
        property: 'option',
        label: 'Opções',
        width:"10%",
        type: 'icon',
        icons: [
          {
            action: this.showInformation.bind(this),
            icon: 'po-icon po-icon-eye',
            tooltip: 'Visualizar',
            value: 'viewDescription',
          },
        ]
      }
    ]
  }

  private showInformation(row: RoomColumn): void {
    this.roomColumn = row;
    this.information.poModal.open();
  }
}
