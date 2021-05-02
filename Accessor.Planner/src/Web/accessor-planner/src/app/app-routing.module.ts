import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
    { path: 'home', loadChildren: () => import("./Modules/home/home.module").then(m => m.HomeModule ) },
    { path: 'user', component: UserRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
