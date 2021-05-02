import { Routes } from "@angular/router";
import { ClientFormComponent } from "./components/client-form/client-form.component";
import { ChooseComponent } from "./pages/choose/choose.component";
import { FormLoginComponent } from "./pages/form-login/form-login.component";
import { FormProviderComponent } from "./pages/form-provider/form-provider.component";
import { IndexComponent } from "./pages/index/index.component";

export const routes: Routes = [
    { path: '', component: IndexComponent},
    { path: 'login', component: FormLoginComponent},
    { path: 'provider-register', component: FormProviderComponent },
    { path: 'choose-register', component: ChooseComponent },
    { path: 'client-register', component: ClientFormComponent}
]