import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoNotificationService, PoSelectOption } from '@po-ui/ng-components';
import { DateFormat } from 'src/app/modules/shared/functions/date-format';
import { Client } from 'src/app/modules/shared/model/client.model';
import { ClientService } from 'src/app/Modules/shared/services/client.service';

@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrls: ['./client-data.component.css']
})
export class ClientDataComponent implements OnInit {

  constructor(private fb: FormBuilder, 
    private clientService: ClientService, 
    private poNotification: PoNotificationService ) { }
    
  ngOnInit(): void {
    this.createForm();
    this.clientService.getById(this.id).subscribe(client => {
      this.client = client;
      this.pupulateData(client);
    });
  }
  private id: string = JSON.parse(localStorage.getItem('client')).id;
  public form: FormGroup;
  public client: Client;
  public loading: boolean = false;

  private createForm(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$')]],
      phone: [null, [ Validators.required, 
        Validators.pattern('^(?:(?:\\+|00)?(55)\\s?)?(?:(?:\\(?[1-9][0-9]\\)?)?\\s?)?(?:((?:9\\d|[2-9])\\d{3})-?(\\d{4}))$')]],
      birthDate: [null, Validators.required],
      sex: [null, Validators.required],
      cpf: [null, [Validators.required]],
      user: this.fb.group({
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]]
      }),
      address: this.fb.group({
        cep: [null, [Validators.required]],
        state: [null, [Validators.required, Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$')]],
        city: [null, [Validators.required, Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$')]],
        number: [null, Validators.required],
        street: [null, Validators.required],
        complement: [null],
      })
    });
  }

  userTypeSelectOptions(): PoSelectOption[] {
    return [
      { label:'Cliente', value:'2' },
      { label:'Acessor', value:'1' }
    ]
  }

  sexSelectOptions(): PoSelectOption[] {
    return [
      { label:'Masculino', value:'m' },
      { label:'Feminino', value:'f' }
    ]
  }

  private pupulateData(client: Client): void {
    this.form.get('name').setValue(client.name);
    this.form.get('phone').setValue(client.phone);
    this.form.get('birthDate').setValue(DateFormat.sqlFormat(client.birthDate));
    this.form.get('sex').setValue(client.sex);
    this.form.get('cpf').setValue(client.cpf);
    this.form.controls.user.get('userName').setValue(client.user.userName);
    this.form.controls.user.get('email').setValue(client.user.email);
    this.form.controls.address.get('city').setValue(client.address.city);
    this.form.controls.address.get('cep').setValue(client.address.cep);
    this.form.controls.address.get('street').setValue(client.address.street);
    this.form.controls.address.get('state').setValue(client.address.state);
    this.form.controls.address.get('complement').setValue(client.address.complement);
    this.form.controls.address.get('number').setValue(client.address.number);
  }

  public updateData(): void {
    this.loading = true;
    this.clientService.update(this.id, this.form.value).subscribe(() => {
      this.poNotification.success("Dados atualizados com sucesso!!");
      this.loading = false;
    }, error => {
      this.poNotification.error("Erro ao atualizar os Dados");
      this.loading = false;
    });
  }
}
