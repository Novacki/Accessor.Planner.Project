import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PoBreadcrumb, PoBreadcrumbItem, PoMenuItem } from '@po-ui/ng-components';
import { getMenuByUser } from './menu-items.model';
import { filter } from 'rxjs/operators';
import { BreadcrumbService } from 'src/app/Modules/shared/services/breadcrumb.service';
import { ClientDataService } from 'src/app/modules/shared/services/client-data.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService, private router: Router, 
    private activatedRoute: ActivatedRoute,
    private clientDataService: ClientDataService) {}

  public poBreadcrumb: PoBreadcrumb = { items: [ { label:'Accessor Planner' } ] };
  public menus: Array<PoMenuItem>;
  public loading: boolean = true;
  ngOnInit(): void {
    this.breadcrumbService.listenerRouteChanges(this.router, this.activatedRoute);
    
    this.breadcrumbService.breadcrumb.subscribe(value => {
     this.menuItemSelected = value[value.length - 1].label;
     this.poBreadcrumb.items = value;
    });

    let user = JSON.parse(localStorage.getItem('auth'));
    
    this.clientDataService.get(user.userId).subscribe(client => {
      localStorage.setItem('client', JSON.stringify(client));
      this.menus = getMenuByUser.get(client.type);
      this.loading = false;
    });
  }

  menuItemSelected: string;

  public printMenuAction(menu: PoMenuItem): void {
    this.menuItemSelected = menu.label;
  }
}
