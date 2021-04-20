import { Routes } from "@angular/router";
import { ConfigComponent } from "./config/config.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { NewSolicitationComponent } from "./new-solicitation/new-solicitation.component";
import { SolicitationComponent } from "./solicitation/solicitation.component";
import { UserRegisterComponent } from "./user-register/user-register.component";

export const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'criar-conta', component: UserRegisterComponent },
    { path:'menu', component: MenuComponent, children: [
        { path: '', component: SolicitationComponent },
        { path: 'new-solicitation', component: NewSolicitationComponent},
        { path: 'configure', component: ConfigComponent}
    ] }
];