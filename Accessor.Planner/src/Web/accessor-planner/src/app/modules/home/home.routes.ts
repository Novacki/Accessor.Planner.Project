import { Routes } from "@angular/router";
import { UserRegisterComponent } from "src/app/user-register/user-register.component";
import { FormLoginComponent } from "./pages/form-login/form-login.component";
import { FormProviderComponent } from "./pages/form-provider/form-provider.component";
import { IndexComponent } from "./pages/index/index.component";

export const routes: Routes = [
    { path: '', component: IndexComponent},
    { path: 'login', component: FormLoginComponent},
    { path: 'provider-register', component: FormProviderComponent },
    { path: 'user-register', component: UserRegisterComponent}
]