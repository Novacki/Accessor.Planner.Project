import { Routes } from "@angular/router";
import { SolicitationFormComponent } from "./components/solicitation-form/solicitation-form.component";
import { IndexComponent } from "./pages/index/index.component";

export const routes: Routes = [
    { path: '', data: { breadcrumb: 'Solicitações em Espera' }, component: IndexComponent },
    { path: 'new-solicitation',data: { breadcrumb: 'Nova Solicitação' },  component: SolicitationFormComponent}
]