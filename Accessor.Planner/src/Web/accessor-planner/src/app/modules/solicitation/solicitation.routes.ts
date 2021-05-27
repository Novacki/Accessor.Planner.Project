import { Routes } from "@angular/router";
import { SolicitationFormComponent } from "./components/solicitation-form/solicitation-form.component";
import { SolicitationAcceptedComponent } from "./pages/client/solicitation-accepted/solicitation-accepted.component";
import { SolicitationOnHoldComponent } from "./pages/client/solicitation-on-hold/solicitation-on-hold.component";
import { SolicitationReturnedComponent } from "./pages/client/solicitation-returned/solicitation-returned.component";



export const routes: Routes = [
    { path: 'on-hold', data: { breadcrumb: 'Solicitações em Espera' }, component: SolicitationOnHoldComponent },
    { path: 'new-solicitation', data: { breadcrumb: 'Nova Solicitação' }, component: SolicitationFormComponent },
    { path: 'accepted', data: { breadcrumb: 'Solicitações Aceitas' }, component: SolicitationAcceptedComponent },
    { path: 'returned', data: { breadcrumb: 'Solicitações Retornadas' }, component: SolicitationReturnedComponent }
]