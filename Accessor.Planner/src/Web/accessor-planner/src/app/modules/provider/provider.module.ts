import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProviderListComponent } from './pages/provider-list/provider-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './provider.routes';



@NgModule({
  declarations: [ProviderListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProviderModule { }
