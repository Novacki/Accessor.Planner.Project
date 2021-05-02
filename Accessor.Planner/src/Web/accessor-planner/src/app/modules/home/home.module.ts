import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './pages/form-user/form-user.component';
import { FormProviderComponent } from './pages/form-provider/form-provider.component';
import { FormLoginComponent } from './pages/form-login/form-login.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import {ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [FormLoginComponent, FormUserComponent, FormProviderComponent, IndexComponent, 
    HeaderComponent, BottomComponent, HomeContentComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports:[IndexComponent],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
