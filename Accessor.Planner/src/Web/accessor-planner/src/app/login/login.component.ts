import { Component, OnInit } from '@angular/core';
import { Login } from '../shared/model/login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

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
