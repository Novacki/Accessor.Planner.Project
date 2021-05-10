import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { IndexComponent } from './pages/index/index.component';

import { PoBreadcrumbModule, PoMenuModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { routes } from './menu.routes';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SideMenuComponent, IndexComponent],
  imports: [
    CommonModule,
    PoMenuModule,
    SharedModule,
    PoBreadcrumbModule,
    RouterModule.forChild(routes)
  ],
  providers:[IndexComponent]
})
export class MenuModule { }
