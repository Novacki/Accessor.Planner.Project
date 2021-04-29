import { Component, OnInit } from '@angular/core';
import { Login } from '../shared/model/login.model';
import { LoginService } from './login.service';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  hide = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Você deve inserir um e-mail.';
    }

    return this.email.hasError('email') ? 'Formato de e-mail não válido.' : '';
  }

  constructor(private service: LoginService) { }

  public login: Login;

  ngOnInit(): void {
  }

  loginUser(email: string, senha: string): boolean{
    console.log(email);
    console.log(senha);
    this.service.login(new Login(email, senha)).subscribe(value=>{
      this.login= value;
      console.log(this.login)
    });

    if(this.login)
      return true;

    return false;
  }





}
