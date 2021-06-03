import { Routes } from "@angular/router";
import { SolicitationFormComponent } from "./components/solicitation-form/solicitation-form.component";
import { SolicitationAccessorApprovedComponent } from "./pages/accessor/solicitation-accessor-approved/solicitation-accessor-approved.component";
import { SolicitationAccessorCanceledComponent } from "./pages/accessor/solicitation-accessor-canceled/solicitation-accessor-canceled.component";
import { SolicitationAccessorDoneComponent } from "./pages/accessor/solicitation-accessor-done/solicitation-accessor-done.component";
import { SolicitationAccessorRejectedComponent } from "./pages/accessor/solicitation-accessor-rejected/solicitation-accessor-rejected.component";
import { SolicitationInReviewComponent } from "./pages/accessor/solicitation-in-review/solicitation-in-review.component";
import { SolicitationNewComponent } from "./pages/accessor/solicitation-new/solicitation-new.component";
import { SolicitationToSendComponent } from "./pages/accessor/solicitation-to-send/solicitation-to-send.component";
import { SolicitationAcceptedComponent } from "./pages/client/solicitation-accepted/solicitation-accepted.component";
import { SolicitationApprovedComponent } from "./pages/client/solicitation-approved/solicitation-approved.component";
import { SolicitationCanceledComponent } from "./pages/client/solicitation-canceled/solicitation-canceled.component";
import { SolicitationDoneComponent } from "./pages/client/solicitation-done/solicitation-done.component";
import { SolicitationOnHoldComponent } from "./pages/client/solicitation-on-hold/solicitation-on-hold.component";
import { SolicitationRejectedComponent } from "./pages/client/solicitation-rejected/solicitation-rejected.component";
import { SolicitationReturnedComponent } from "./pages/client/solicitation-returned/solicitation-returned.component";



export const routes: Routes = [
    { path: 'on-hold', data: { breadcrumb: 'Solicitações em Espera' }, component: SolicitationOnHoldComponent },
    { path: 'new-solicitation', data: { breadcrumb: 'Nova Solicitação' }, component: SolicitationFormComponent },
    { path: 'accepted', data: { breadcrumb: 'Solicitações Aceitas' }, component: SolicitationAcceptedComponent },
    { path: 'returned', data: { breadcrumb: 'Solicitações Retornadas' }, component: SolicitationReturnedComponent },
    { path: 'approved', data: { breadcrumb: 'Solicitações Aprovadas' }, component: SolicitationApprovedComponent },
    { path: 'canceled', data: { breadcrumb: 'Solicitações Canceladas' }, component: SolicitationCanceledComponent },
    { path: 'rejected', data: { breadcrumb: 'Solicitações Rejeitadas' }, component: SolicitationRejectedComponent },
    { path: 'done', data: { breadcrumb: 'Solicitações Encerradas' }, component: SolicitationDoneComponent },
    { path: 'news', data: { breadcrumb: 'Novas Solicitações' }, component: SolicitationNewComponent},
    { path: 'to-send', data: { breadcrumb: 'Solicitações para Enviar' }, component: SolicitationToSendComponent},
    { path: 'in-review', data: { breadcrumb: 'Solicitações em Revisão' }, component: SolicitationInReviewComponent},
    { path: 'accessor-rejected', data: { breadcrumb: 'Solicitações Rejeitadas' }, component: SolicitationAccessorRejectedComponent},
    { path: 'accessor-approved', data: { breadcrumb: 'Solicitações Aprovadas' }, component: SolicitationAccessorApprovedComponent},
    { path: 'accessor-canceled', data: { breadcrumb: 'Solicitações Canceladas' }, component: SolicitationAccessorCanceledComponent},
    { path: 'accessor-done', data: { breadcrumb: 'Solicitações Encerradas' }, component: SolicitationAccessorDoneComponent},
]