import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PoModalAction, PoModalComponent, PoTableColumn } from '@po-ui/ng-components';
import { ShowInformationsComponent } from 'src/app/Modules/shared/components/show-informations/show-informations.component';
import { StatusSolicitation } from 'src/app/modules/shared/enum/status-solicitation';
import { UserType } from 'src/app/modules/shared/enum/user-type';
import { RoomColumn } from '../../model/room-column.model';
import { SolicitationColumn } from '../../model/solicitation-column.model';
import { SolicitationService } from '../../services/solicitation.service';

@Component({
  selector: 'app-solicitation-operation',
  templateUrl: './solicitation-operation.component.html',
  styleUrls: ['./solicitation-operation.component.css']
})
export class SolicitationOperationComponent implements OnInit {


  constructor(private solicitationService: SolicitationService, private router: Router) { }

  @ViewChild('information') information: ShowInformationsComponent;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  public status: StatusSolicitation; 
  public userType: UserType;
  public statusCompare: StatusSolicitation;

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

  openModal(row: SolicitationColumn, status?: StatusSolicitation, user?: UserType): void {
    this.solicitation = row;
    this.status = status;
    this.userType = user;
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

  public cancel(): void {
    this.solicitationService.cancel(this.solicitation.id, "string").subscribe(response => {
      this.closeModal();
    });
  }
}
