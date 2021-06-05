import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProviderService } from 'src/app/modules/shared/services/provider.service';


@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.css']
})
export class ProviderFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private providerService: ProviderService, private router: Router) { }

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
      phone: ['', Validators.required],
      user: this.fb.group({
        userName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
      }),
      address: this.fb.group({
        cep: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
        number: ['', Validators.required],
        street: ['', Validators.required],
        complement: ['', Validators.required],
      })
    });
  }

  public registerProvider(): void {
    this.loading = true;
    this.providerService.create(this.form.value).subscribe(response => {
      this.router.navigate(['login']);
    });
  }
}
