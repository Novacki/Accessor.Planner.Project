import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { IndexComponent } from './pages/index/index.component';

import { PoMenuModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { routes } from './menu.routes';



@NgModule({
  declarations: [SideMenuComponent, IndexComponent],
  imports: [
    CommonModule,
    PoMenuModule,
    RouterModule.forChild(routes)
  ],
  providers:[IndexComponent]
})
export class MenuModule { }
