import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';



const routes: Routes = [
  { path: '',  component: IndexComponent, data: { breadcrumb: 'Accessor Planner' }, children: [
    { path: 'solicitations', data: { breadcrumb: 'Solicitações' }, loadChildren: () => import("../solicitation/solicitation.module").then(m => m.SolicitationModule )},
    { path: 'user-information', data: { breadcrumb: 'Informações do Usuário' }, loadChildren: () => import("../user-data/user-data.module").then(m => m.UserDataModule )},
    { path: 'clients', data: { breadcrumb: 'Clientes' }, loadChildren: () => import("./../client/client.module").then(m => m.ClientModule )},
    { path: 'providers', data: { breadcrumb: 'Fornecedores' }, loadChildren: () => import("./../provider/provider.module").then(m => m.ProviderModule )}
  ] },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})

export class MenuRoutingModule { }
