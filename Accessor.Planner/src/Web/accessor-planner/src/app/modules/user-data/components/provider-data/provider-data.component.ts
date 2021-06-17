import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { Provider } from 'src/app/modules/shared/model/provider.model';
import { ProviderService } from 'src/app/modules/shared/services/provider.service';

@Component({
  selector: 'app-provider-data',
  templateUrl: './provider-data.component.html',
  styleUrls: ['./provider-data.component.css']
})
export class ProviderDataComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private providerService: ProviderService, 
    private poNotification: PoNotificationService) { }

  public form: FormGroup;
  public loading: boolean = false;
  private provider: Provider;
  private id: string = JSON.parse(localStorage.getItem('provider')).id;

  ngOnInit(): void {
    this.generateForm();
    this.providerService.getById(this.id).subscribe(provider => {
      this.provider = provider;
      this.populateData(this.provider);
    });
  }

  private generateForm(): void {
    this.form = this.fb.group({
      fantasyName: ['', Validators.required],
      socialReason: ['', Validators.required],
      cnpj: ['', Validators.required],
      phone: [null, [ Validators.required, 
        Validators.pattern('^(?:(?:\\+|00)?(55)\\s?)?(?:(?:\\(?[1-9][0-9]\\)?)?\\s?)?(?:((?:9\\d|[2-9])\\d{3})-?(\\d{4}))$')]],
      user: this.fb.group({
        userName: ['', Validators.required],
        email: [null, [Validators.required, Validators.email]],
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

  private populateData(provider: Provider): void {
    this.form.get('fantasyName').setValue(provider.fantasyName);
    this.form.get('socialReason').setValue(provider.socialReason);
    this.form.get('cnpj').setValue(provider.cnpj);
    this.form.get('phone').setValue(provider.phone);
    this.form.controls.user.get('userName').setValue(provider.user.userName);
    this.form.controls.user.get('email').setValue(provider.user.email);
    this.form.controls.address.get('city').setValue(provider.address.city);
    this.form.controls.address.get('cep').setValue(provider.address.cep);
    this.form.controls.address.get('street').setValue(provider.address.street);
    this.form.controls.address.get('state').setValue(provider.address.state);
    this.form.controls.address.get('complement').setValue(provider.address.complement);
    this.form.controls.address.get('number').setValue(provider.address.number);
  }

  public updateData(): void {
    this.loading = true;
    this.providerService.update(this.id, this.form.value).subscribe(() => {
      this.poNotification.success("Dados atualizados com sucesso!!");
      this.loading = false;
    }, error => {
      this.poNotification.error("Erro ao atualizar os Dados");
      this.loading = false;
    });
  }
}
