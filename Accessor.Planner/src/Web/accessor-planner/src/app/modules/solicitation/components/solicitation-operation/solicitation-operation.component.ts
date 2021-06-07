import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoModalAction, PoModalComponent, PoTableColumn } from '@po-ui/ng-components';
import { ShowInformationsComponent } from 'src/app/Modules/shared/components/show-informations/show-informations.component';
import { StatusSolicitation } from 'src/app/modules/shared/enum/status-solicitation';
import { UserType } from 'src/app/modules/shared/enum/user-type';
import { RoomColumn } from '../../model/room-column.model';
import { SolicitationColumn } from '../../model/solicitation-column.model';
import { SolicitationFilter } from '../../model/solicitation-filter.model';
import { SolicitationService } from '../../services/solicitation.service';

@Component({
  selector: 'app-solicitation-operation',
  templateUrl: './solicitation-operation.component.html',
  styleUrls: ['./solicitation-operation.component.css']
})
export class SolicitationOperationComponent implements OnInit {


  constructor(private solicitationService: SolicitationService, private fb: FormBuilder) { }

  @ViewChild('information') information: ShowInformationsComponent;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild('providerConfirmation') providerConfirmation: ShowInformationsComponent;

  public status: StatusSolicitation; 
  public userType: UserType;
  private filter: SolicitationFilter;
  public loading: boolean = false;
  public form: FormGroup;

  ngOnInit(): void {
    this.contructForm();
  }

  public solicitation: SolicitationColumn;
  public roomColumn: RoomColumn;
  public buttonActivate: boolean = true;
  @Output() public change: EventEmitter<void> = new EventEmitter();

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

  openModal(row: SolicitationColumn,  filter?: SolicitationFilter): void {
    this.filter = filter;
    this.solicitation = row;
    this.status = filter.status;
    this.userType = filter.userType;
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
      this.emitChangeOperation();
    },
    error => console.log(error),
    () => {
      this.buttonActivate = true;
      this.loading = false;
    });
  }

  public approve(): void {
    this.loading = true;
    this.solicitationService.approve(this.solicitation.id).subscribe(response => {
      this.emitChangeOperation();
    },
    error => console.log(error),
    () => {
      this.buttonActivate = true;
      this.loading = false;
    });
  }

  public reject(): void {
    this.loading = true;
    this.solicitationService.reject(this.solicitation.id, "string").subscribe(response => {
      this.emitChangeOperation();
    },
    error => console.log(error),
    () => {
      this.buttonActivate = true;
      this.loading = false;
    });
  }

  public accessorAccept(): void {
    this.loading = true;
    this.solicitationService.accessorAccept(this.solicitation.id).subscribe(response => {
      this.emitChangeOperation();
    },
    error => console.log(error),
    () => {
      this.buttonActivate = true;
      this.loading = false;
    });;
  }

  public accessorSend(): void {
    this.loading = true;
    this.solicitationService.accessorSend(this.solicitation.id).subscribe(response => {
      this.emitChangeOperation();
    },
    error => console.log(error),
    () => {
      this.buttonActivate = true;
      this.loading = false;
    });;
  }

  public providerAccept(): void {
    this.loading = true;
    this.solicitationService.providerAccept({userId: this.filter.profileContextId, solicitationId: this.solicitation.id})
      .subscribe(response => {
      this.emitChangeOperation();
    },
    error => console.log(error),
    () => {
      this.buttonActivate = true;
      this.loading = false;
    });;
  }

  public providerSend(): void {
    this.loading = true;
    this.solicitationService.providerSend({ userId: this.filter.profileContextId, solicitationId: this.solicitation.id, value: this.form.controls.value.value }).subscribe(response => {
      this.providerConfirmation.poModal.close();
      this.emitChangeOperation();
    },
    error => console.log(error),
    () => {
      this.buttonActivate = true;
      this.loading = false;
    });;
  }

  public validProviderExist(): boolean {
    return this.solicitation.provider != 'Não Requisitado';
  }

  private emitChangeOperation(): void {
    this.buttonActivate = false;
    this.change.emit();
    this.closeModal();
  }

  public openSendValue(): void {
    this.providerConfirmation.poModal.open();
  }

  private contructForm(): void {
    this.form = this.fb.group({
      value: ['', Validators.required]
    });
  }
}
