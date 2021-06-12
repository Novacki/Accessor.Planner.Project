import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { ProviderService } from 'src/app/modules/shared/services/provider.service';


@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.css']
})
export class ProviderFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private providerService: ProviderService, 
    private router: Router,
    private poNotification: PoNotificationService) { }

  public form: FormGroup;
  public loading: boolean = false;

  ngOnInit(): void {
    this.generateForm();
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
        password: ['', Validators.required],
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

  public registerProvider(): void {
    this.loading = true;
    this.providerService.create(this.form.value).subscribe(response => {
      this.poNotification.success("Cadastro Realizado com Sucesso!!")
      this.router.navigate(['login']);
    }, error => {
      this.loading = false;
      this.poNotification.error("E-mail ou Usuário já Utilizado!");
    })
  }
}
