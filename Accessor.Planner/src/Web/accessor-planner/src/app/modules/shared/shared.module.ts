import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DividerComponent } from './components/divider/divider.component';
import { FormValidatorDirective } from './directives/form-validator.directive';
import { HttpService } from './services/http.service';
import { PoLoadingModule, PoModule } from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [CardComponent, DividerComponent, FormValidatorDirective, LoadingComponent],
  imports: [
    CommonModule,
    PoLoadingModule,
    ReactiveFormsModule,
    PoModule
  ],
  exports:[CardComponent, DividerComponent, FormValidatorDirective, ReactiveFormsModule, PoLoadingModule, PoModule, LoadingComponent],
  providers:[HttpService]
})
export class SharedModule { }
