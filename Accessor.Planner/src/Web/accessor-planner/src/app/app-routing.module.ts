import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: 'home', loadChildren: () => import("./Modules/home/home.module").then(m => m.HomeModule ) },
    { path: 'menu', loadChildren: () => import("./modules/menu/menu.module").then(m => m.MenuModule ) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
