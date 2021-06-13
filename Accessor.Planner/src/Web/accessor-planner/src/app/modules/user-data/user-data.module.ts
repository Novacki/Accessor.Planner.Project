import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDataComponent } from './components/client-data/client-data.component';
import { RouterModule } from '@angular/router';
import { routes } from './user-data.routes';
import { InformationClientComponent } from './pages/information-client/information-client.component';
import { InformationProviderComponent } from './pages/information-provider/information-provider.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [InformationClientComponent, InformationProviderComponent, ClientDataComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UserDataModule { }
