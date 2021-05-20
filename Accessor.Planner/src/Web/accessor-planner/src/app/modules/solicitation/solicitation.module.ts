import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitationFormComponent } from './components/solicitation-form/solicitation-form.component';
import { IndexComponent } from './pages/index/index.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './solicitation.routes';
import { ModalRoomComponent } from './components/solicitation-form/modal-room/modal-room.component';
import { ModalFurnitureComponent } from './components/solicitation-form/modal-room/modal-furniture/modal-furniture.component';
import { SolicitationTableComponent } from './components/solicitation-table/solicitation-table.component';



@NgModule({
  declarations: [SolicitationFormComponent, IndexComponent, ModalRoomComponent, ModalFurnitureComponent, SolicitationTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SolicitationModule { }
