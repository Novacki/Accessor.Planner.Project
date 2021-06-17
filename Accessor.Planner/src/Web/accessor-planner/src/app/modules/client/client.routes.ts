import { Routes } from "@angular/router";
import { ClientListComponent } from "./pages/client-list/client-list.component";

export const routes: Routes = [
    { path: '', data: { breadcrumb: 'Todos' }, component: ClientListComponent }
]