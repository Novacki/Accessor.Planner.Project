import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) { }

  public form: FormGroup;
  public loading: boolean = false;

  ngOnInit(): void {
    this.generateForm();
  }

  private generateForm(): void {
    this.form = this.fb.group({
      email: [ '', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  public loginAccount() {
    this.loading = true;
    this.accountService.singIn(this.form.value).subscribe(response => {
      localStorage.setItem('token', response);
      this.router.navigate(['../menu'])
    });
  }
}
