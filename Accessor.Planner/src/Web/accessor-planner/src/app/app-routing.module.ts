import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRouterService } from './modules/shared/services/auth-router.service';



const routes: Routes = [
    { path: 'home',data: { breadcrumb: 'Início' }, loadChildren: () => import("./Modules/home/home.module").then(m => m.HomeModule ) },
    { path: 'menu', loadChildren: () => import("./modules/menu/menu.module").then(m => m.MenuModule ), canActivate: [AuthRouterService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
