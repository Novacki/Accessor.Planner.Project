import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoNotificationService, PoSelectOption } from '@po-ui/ng-components';
import { Client } from 'src/app/modules/shared/model/client.model';
import { ClientService } from 'src/app/Modules/shared/services/client.service';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor(private fb: FormBuilder, 
    private clientService: ClientService, 
    private router: Router,
    private poNotification: PoNotificationService ) { }

  public form: FormGroup;
  public client: Client;
  public loading: boolean = false;

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$')]],
      phone: [null, [ Validators.required, 
        Validators.pattern('^(?:(?:\\+|00)?(55)\\s?)?(?:(?:\\(?[1-9][0-9]\\)?)?\\s?)?(?:((?:9\\d|[2-9])\\d{3})-?(\\d{4}))$')]],
      birthDate: [null, Validators.required],
      sex: [null, Validators.required],
      cpf: [null, [Validators.required]],
      type: [null, Validators.required],
      user: this.fb.group({
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required],
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

  registerUser(): void {
    this.loading = true;
    this.clientService.create(this.form.value).subscribe(response => {
      this.poNotification.success('Cadastro Realizado com Sucesso!!')
      this.router.navigate(['/login']);
    },
    error => {
      this.loading = false;
      this.poNotification.error("E-mail ou Usuário já Utilizado!");
    })
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
}
