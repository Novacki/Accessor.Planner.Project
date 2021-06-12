import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoModalAction, PoModalComponent, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';
import { ShowInformationsComponent } from 'src/app/Modules/shared/components/show-informations/show-informations.component';
import { StatusSolicitation } from 'src/app/modules/shared/enum/status-solicitation';
import { UserType } from 'src/app/modules/shared/enum/user-type';
import { RoomColumn } from '../../model/room-column.model';
import { SolicitationColumn } from '../../model/solicitation-column.model';
import { SolicitationFilter } from '../../model/solicitation-filter.model';
import { SolicitationHistoryColumn } from '../../model/solicitation-history-column.model';
import { SolicitationService } from '../../services/solicitation.service';

@Component({
  selector: 'app-solicitation-operation',
  templateUrl: './solicitation-operation.component.html',
  styleUrls: ['./solicitation-operation.component.css']
})
export class SolicitationOperationComponent implements OnInit {


  constructor(private solicitationService: SolicitationService, private fb: FormBuilder, private poNotification: PoNotificationService) { }

  @ViewChild('information') information: ShowInformationsComponent;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild('providerConfirmation') providerConfirmation: ShowInformationsComponent;
  @ViewChild('historySolicitation') historySolicitation: ShowInformationsComponent;

  public status: StatusSolicitation; 
  public userType: UserType;
  private filter: SolicitationFilter;
  public value: string;
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
    this.getValueSolicitation(this.solicitation.solicitationHistories);
    this.poModal.open();
  }

  openHistory() {
    this.historySolicitation.poModal.open();
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

  public getColumnsSolicitationsHistory(): Array<PoTableColumn> {
    return [
      { property: 'status', label: 'Status', width: '10%' },
      { property: 'type', label: 'Assinante', width: '10%' },
      { property: 'accessor', label: 'Acessor', width: '15%' },
      { property: 'provider', label: 'Fornecedor', width: '15%' },
      { property: 'value', label: 'Valor', width: '10%' },
      { property: 'createdAt', label: 'Data', width: '15%' }
    ]
  }

  private showInformation(row: RoomColumn): void {
    this.roomColumn = row;
    this.information.poModal.open();
  }

  public cancel(): void {
    this.solicitationService.cancel(this.solicitation.id, "string").subscribe(response => {
      this.poNotification.success("Solicitação cancelada com sucesso!");
      this.emitChangeOperation();
    },
    error => {
      this.poNotification.error("Erro ao cancelar solicitação!");
      this.loading = false;
    },
    () => {
      this.buttonActivate = true;
      this.loading = false;
    });
  }

  public approve(): void {
    this.loading = true;
    let lastHistory = this.solicitation.solicitationHistories[this.solicitation.solicitationHistories.length -1];
    
    this.solicitationService.approve({ solicitationId: this.solicitation.id, userId: this.filter.profileContextId,
      value: !isNaN(Number(lastHistory.value)) ? Number(lastHistory.value) : 0, solicitationEndDate: new Date() }).subscribe(response => {
      this.poNotification.success("Solicitação aprovada com sucesso!");
      this.emitChangeOperation();
    },
    error => {
      this.poNotification.error("Erro ao aprovar solicitação!");
      this.loading = false;
    },
    () => {
      this.buttonActivate = true;
      this.loading = false;
    });
  }

  public reject(): void {
    this.loading = true;
    let lastHistory = this.solicitation.solicitationHistories[this.solicitation.solicitationHistories.length -1];
    this.solicitationService.reject({ solicitationId: this.solicitation.id, userId: this.filter.profileContextId,
      value: !isNaN(Number(lastHistory.value)) ? Number(lastHistory.value) : 0, solicitationEndDate:  new Date() }).subscribe(response => {
      this.poNotification.success("Solicitação rejeitada com sucesso!");
      this.emitChangeOperation();
    },
    error => {
      this.poNotification.error("Erro ao rejeitar solicitação!");
      this.loading = false;
    },
    () => {
      this.buttonActivate = true;
      this.loading = false;
    });
  }

  public done(): void {
    this.loading = true;
   
    let lastHistory = this.solicitation.solicitationHistories[this.solicitation.solicitationHistories.length -1];
    this.solicitationService.done({ solicitationId: this.solicitation.id, userId: this.filter.profileContextId,
      value: !isNaN(Number(lastHistory.value)) ? Number(lastHistory.value) : 0}).subscribe(response => {
      this.poNotification.success("Solicitação encerrada com sucesso!");
      this.emitChangeOperation();
    },
    error => {
      this.poNotification.error("Erro ao encerrar solicitação!");
      this.loading = false;
    },
    () => {
      this.buttonActivate = true;
      this.loading = false;
    });
  }

  public accessorAccept(): void {
    this.loading = true;
    this.solicitationService.accessorAccept(this.solicitation.id).subscribe(response => {
      this.poNotification.success("Solicitação aceita com sucesso!");
      this.emitChangeOperation();
    },
    error => {
      this.poNotification.error("Erro ao aceitar solicitação!");
      this.loading = false;
    },
    () => {
      this.buttonActivate = true;
      this.loading = false;
    });;
  }

  public accessorSend(): void {
    this.loading = true;
    this.solicitationService.accessorSend(this.solicitation.id).subscribe(response => {
      this.poNotification.success("Solicitação enviada com sucesso!");
      this.emitChangeOperation();
    },
    error => {
      this.poNotification.error("Erro ao enviar solicitação!");
      this.loading = false;
    },
    () => {
      this.buttonActivate = true;
      this.loading = false;
    });;
  }

  public providerAccept(): void {
    this.loading = true;
    this.solicitationService.providerAccept({userId: this.filter.profileContextId, solicitationId: this.solicitation.id})
      .subscribe(response => {
      this.poNotification.success("Solicitação aceita com sucesso!");
      this.emitChangeOperation();
    },
    error => {
      this.poNotification.error("Erro ao aceitar solicitação!");
      this.loading = false;
    },
    () => {
      this.buttonActivate = true;
      this.loading = false;
    });;
  }

  public providerSend(): void {
    this.loading = true;
    this.solicitationService.providerSend({ userId: this.filter.profileContextId, solicitationId: this.solicitation.id, 
        value: this.form.controls.value.value, solicitationEndDate: this.form.controls.solicitationEndDate.value }).subscribe(response => {

      this.poNotification.success("Solicitação enviada com sucesso!");
      this.form.reset();
      this.providerConfirmation.poModal.close();
      this.emitChangeOperation();

    },
    error => {
      this.poNotification.error("Erro ao enviar solicitação!");
      this.loading = false;
    },
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
      value: [null, Validators.required],
      solicitationEndDate: [null, [Validators.required]]
    });
  }

  private getValueSolicitation(solicitationHistories: SolicitationHistoryColumn[]): void {
    if(solicitationHistories) {
      this.value = solicitationHistories[solicitationHistories.length - 1].value;
    }
  }

  // private validateDate(control: any): ValidationErrors {
  //   let result = new Date(control.value).getTime() > new Date().getTime();
  //   console.log(result)
  //   console.log(new Date(control.value).getTime())
  //   console.log(new Date().getTime())
  //   if(!result)
  //     return ['invalidDate', 'Data inválida']
  //   else
  //     return null;
  // }
}
