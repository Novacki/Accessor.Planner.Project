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
import { SolicitationNewComponent } from './pages/accessor/solicitation-new/solicitation-new.component';
import { SolicitationToSendComponent } from './pages/accessor/solicitation-to-send/solicitation-to-send.component';
import { SolicitationAccessorApprovedComponent } from './pages/accessor/solicitation-accessor-approved/solicitation-accessor-approved.component';
import { SolicitationAccessorRejectedComponent } from './pages/accessor/solicitation-accessor-rejected/solicitation-accessor-rejected.component';
import { SolicitationAccessorDoneComponent } from './pages/accessor/solicitation-accessor-done/solicitation-accessor-done.component';
import { SolicitationAccessorCanceledComponent } from './pages/accessor/solicitation-accessor-canceled/solicitation-accessor-canceled.component';
import { SolicitationInReviewComponent } from './pages/accessor/solicitation-in-review/solicitation-in-review.component';




@NgModule({
  declarations: [SolicitationFormComponent, ModalRoomComponent, ModalFurnitureComponent, SolicitationOnHoldComponent, SolicitationAcceptedComponent, SolicitationReturnedComponent, SolicitationOperationComponent, SolicitationApprovedComponent, SolicitationDoneComponent, SolicitationCanceledComponent, SolicitationRejectedComponent, SolicitationNewComponent, SolicitationToSendComponent, SolicitationAccessorApprovedComponent, SolicitationAccessorRejectedComponent, SolicitationAccessorDoneComponent, SolicitationAccessorCanceledComponent, SolicitationInReviewComponent ],
  imports: [
    CommonModule,
    SharedModule,
    PoAccordionModule,
    RouterModule.forChild(routes)
  ]
})
export class SolicitationModule { }
