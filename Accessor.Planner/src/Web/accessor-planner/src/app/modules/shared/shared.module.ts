import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DividerComponent } from './components/divider/divider.component';
import { FormValidatorDirective } from './directives/form-validator.directive';
import { HttpService } from './services/http.service';



@NgModule({
  declarations: [CardComponent, DividerComponent, FormValidatorDirective],
  imports: [
    CommonModule
  ],
  exports:[CardComponent, DividerComponent, FormValidatorDirective],
  providers:[HttpService]
})
export class SharedModule { }
