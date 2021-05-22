import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';



const routes: Routes = [
  { path: '',  component: IndexComponent, data: { breadcrumb: 'Accessor Planner' }, children: [
    { path: 'solicitations', data: { breadcrumb: 'Solicitações' }, loadChildren: () => import("../solicitation/solicitation.module").then(m => m.SolicitationModule )},
  ] },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})

export class MenuRoutingModule { }
