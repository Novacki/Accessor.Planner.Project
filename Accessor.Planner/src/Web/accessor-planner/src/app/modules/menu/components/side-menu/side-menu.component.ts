import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PoBreadcrumb, PoBreadcrumbItem, PoMenuItem } from '@po-ui/ng-components';
import { getMenuByUser } from './menu-items.model';
import { filter } from 'rxjs/operators';
import { BreadcrumbService } from 'src/app/Modules/shared/services/breadcrumb.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService, private router: Router, private activatedRoute: ActivatedRoute) {}

  public poBreadcrumb: PoBreadcrumb = { items: [ { label:'Accessor Planner' } ] };
 
  ngOnInit(): void {
    this.breadcrumbService.listenerRouteChanges(this.router, this.activatedRoute);
    
    this.breadcrumbService.breadcrumb.subscribe(value => {
     this.menuItemSelected = value[value.length - 1].label;
     this.poBreadcrumb.items = value;
    });
  }

  menuItemSelected: string;

  public menus: Array<PoMenuItem> = getMenuByUser.get(2);

  public printMenuAction(menu: PoMenuItem): void {
    this.menuItemSelected = menu.label;
  }
}
