import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { IndexComponent } from './pages/index/index.component';

import { PoBreadcrumbModule, PoMenuModule } from '@po-ui/ng-components';
import { SharedModule } from '../shared/shared.module';
import { MenuRoutingModule } from './menu-routing.module';




@NgModule({
  declarations: [SideMenuComponent, IndexComponent],
  imports: [
    CommonModule,
    PoMenuModule,
    SharedModule,
    PoBreadcrumbModule,
    MenuRoutingModule
  ],
  providers:[]
})
export class MenuModule { }
