import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { PoBreadcrumb, PoBreadcrumbItem } from '@po-ui/ng-components';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  public breadcrumb: BehaviorSubject<PoBreadcrumbItem[]> = new BehaviorSubject([]);
  
  constructor() {}


  public listenerRouteChanges(router: Router, activatedRoute: ActivatedRoute): void {
    
    if(this.breadcrumb.value.length == 0)
      this.breadcrumb.next(this.createBreadcrumbs(activatedRoute.parent.root, ''))

    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.breadcrumb.next(this.createBreadcrumbs(activatedRoute.parent.root, '')));

  }

  private createBreadcrumbs(route: ActivatedRoute, url?: string, breadcrumbs: PoBreadcrumbItem[] = []): PoBreadcrumbItem[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data.breadcrumb;
      if (label) {
        breadcrumbs.push({label, link: url});
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
