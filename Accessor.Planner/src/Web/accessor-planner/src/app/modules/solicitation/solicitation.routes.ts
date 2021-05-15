import { Routes } from "@angular/router";
import { SolicitationFormComponent } from "./components/solicitation-form/solicitation-form.component";
import { IndexComponent } from "./pages/index/index.component";

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'new-solicitation', component: SolicitationFormComponent}
]