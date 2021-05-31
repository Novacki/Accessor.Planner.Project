import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitationFormComponent } from './components/solicitation-form/solicitation-form.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './solicitation.routes';
import { ModalRoomComponent } from './components/solicitation-form/modal-room/modal-room.component';
import { ModalFurnitureComponent } from './components/solicitation-form/modal-room/modal-furniture/modal-furniture.component';


import { SolicitationOnHoldComponent } from './pages/client/solicitation-on-hold/solicitation-on-hold.component';
import { SolicitationAcceptedComponent } from './pages/client/solicitation-accepted/solicitation-accepted.component';
import { SolicitationReturnedComponent } from './pages/client/solicitation-returned/solicitation-returned.component';
import { SolicitationOperationComponent } from './components/solicitation-operation/solicitation-operation.component';
import { PoAccordionModule } from '@po-ui/ng-components';
import { SolicitationApprovedComponent } from './pages/client/solicitation-approved/solicitation-approved.component';
import { SolicitationDoneComponent } from './pages/client/solicitation-done/solicitation-done.component';
import { SolicitationCanceledComponent } from './pages/client/solicitation-canceled/solicitation-canceled.component';
import { SolicitationRejectedComponent } from './pages/client/solicitation-rejected/solicitation-rejected.component';



@NgModule({
  declarations: [SolicitationFormComponent, ModalRoomComponent, ModalFurnitureComponent, SolicitationOnHoldComponent, SolicitationAcceptedComponent, SolicitationReturnedComponent, SolicitationOperationComponent, SolicitationApprovedComponent, SolicitationDoneComponent, SolicitationCanceledComponent, SolicitationRejectedComponent],
  imports: [
    CommonModule,
    SharedModule,
    PoAccordionModule,
    RouterModule.forChild(routes)
  ]
})
export class SolicitationModule { }
