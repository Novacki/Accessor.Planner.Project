import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/modules/shared/model/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  public form: FormGroup;
  public client: Client;

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      birthDate: ['', Validators.required],
      sex: ['', Validators.required],
      cpf: ['', Validators.required],
      type: ['', Validators.required],
      user: this.fb.group({
        userName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
      }),
      addresses: this.fb.group({
        cep: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
        number: ['', Validators.required],
        street: ['', Validators.required],
        complement: ['', Validators.required],
      })
    });
  }
}
