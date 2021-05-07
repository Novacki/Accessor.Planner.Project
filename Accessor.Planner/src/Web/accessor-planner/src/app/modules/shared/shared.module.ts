import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DividerComponent } from './components/divider/divider.component';
import { FormValidatorDirective } from './directives/form-validator.directive';



@NgModule({
  declarations: [CardComponent, DividerComponent, FormValidatorDirective],
  imports: [
    CommonModule
  ],
  exports:[CardComponent, DividerComponent, FormValidatorDirective]
})
export class SharedModule { }
