import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './client.routes';
import { ClientsNegociationComponent } from './pages/clients-negociation/clients-negociation.component';



@NgModule({
  declarations: [
    ClientListComponent,
    ClientsNegociationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }
