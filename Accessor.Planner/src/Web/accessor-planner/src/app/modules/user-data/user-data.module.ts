import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDataComponent } from './components/client-data/client-data.component';
import { RouterModule } from '@angular/router';
import { routes } from './user-data.routes';
import { SharedModule } from '../shared/shared.module';
import { InformationUserComponent } from './pages/information-user/information-user.component';
import { ProviderDataComponent } from './components/provider-data/provider-data.component';



@NgModule({
  declarations: [ClientDataComponent, InformationUserComponent, ProviderDataComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UserDataModule { }
