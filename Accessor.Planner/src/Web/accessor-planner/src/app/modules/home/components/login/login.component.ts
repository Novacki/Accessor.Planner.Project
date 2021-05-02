import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/shared/model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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

  constructor() { }

  public login: Login;

  ngOnInit(): void {
  }


}
