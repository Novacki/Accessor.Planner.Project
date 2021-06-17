import { Routes } from "@angular/router";
import { ProviderListComponent } from "./pages/provider-list/provider-list.component";

export const routes: Routes = [
    { path: '', data: { breadcrumb: 'Todos os Fornecedores' }, component: ProviderListComponent }
]