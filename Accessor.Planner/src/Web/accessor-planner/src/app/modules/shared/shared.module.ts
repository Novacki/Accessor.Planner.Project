import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DividerComponent } from './components/divider/divider.component';



@NgModule({
  declarations: [CardComponent, DividerComponent],
  imports: [
    CommonModule
  ],
  exports:[CardComponent, DividerComponent]
})
export class SharedModule { }
