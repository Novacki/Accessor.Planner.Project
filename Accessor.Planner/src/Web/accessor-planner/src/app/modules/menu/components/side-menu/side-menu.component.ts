import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PoBreadcrumb, PoBreadcrumbItem, PoMenuItem } from '@po-ui/ng-components';
import { getMenuByUser } from './menu-items.model';
import { filter } from 'rxjs/operators';
import { BreadcrumbService } from 'src/app/Modules/shared/services/breadcrumb.service';
import { ClientService } from 'src/app/modules/shared/services/client.service';
import { ProviderService } from 'src/app/modules/shared/services/provider.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService, private router: Router, 
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
    private providerService: ProviderService) {}

  public poBreadcrumb: PoBreadcrumb = { items: [ { label:'Accessor Planner' } ] };
  public menus: Array<PoMenuItem>;
  public loading: boolean = true;
  public menuItemSelected: string;
  ngOnInit(): void {
    this.breadcrumbService.listenerRouteChanges(this.router, this.activatedRoute);
    
    this.breadcrumbService.breadcrumb.subscribe(value => {
     if(value[value.length - 1]) {
       this.menuItemSelected = value[value.length - 1].label;
       this.poBreadcrumb.items = value;
     }
    });

    let user = JSON.parse(localStorage.getItem('auth'));
    
    this.clientService.getByUserId(user.userId).subscribe(client => {
      if(client) {
        localStorage.setItem('client', JSON.stringify(client));
        this.menus = getMenuByUser.get(client.type);
        this.loading = false;
      } 
    });

    this.providerService.getByUserId(user.userId).subscribe(provider => {
      if(provider) {
        localStorage.setItem('provider', JSON.stringify(provider));
        this.menus = getMenuByUser.get(1);
        this.loading = false;
      }
    });
  }
}
