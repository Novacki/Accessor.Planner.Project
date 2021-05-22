import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DividerComponent } from './components/divider/divider.component';
import { FormValidatorDirective } from './directives/form-validator.directive';
import { HttpService } from './services/http.service';
import { PoLoadingModule, PoModule, PoTableModule } from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { HttpInterceptorModule } from './Interceptor/http-interceptor.module';
import { ShowInformationsComponent } from './components/show-informations/show-informations.component';
import { BreadcrumbService } from './services/breadcrumb.service';



@NgModule({
  declarations: [CardComponent, DividerComponent, FormValidatorDirective, LoadingComponent, ShowInformationsComponent],
  imports: [
    CommonModule,
    PoLoadingModule,
    ReactiveFormsModule,
    PoModule,
    PoTableModule,
    HttpInterceptorModule
  ],
  exports:[CardComponent, DividerComponent, FormValidatorDirective, ReactiveFormsModule, PoLoadingModule, PoModule, LoadingComponent, PoTableModule, ShowInformationsComponent],
  providers:[HttpService, BreadcrumbService]
})
export class SharedModule { }
