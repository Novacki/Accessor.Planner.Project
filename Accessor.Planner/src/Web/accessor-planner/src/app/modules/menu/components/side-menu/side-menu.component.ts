import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  menuItemSelected: string;

  menus: Array<PoMenuItem> = [
    { label:'Perfil', icon:'po-icon po-icon-user', shortLabel: 'Perfil', subItems: [
      { label: 'Meus Dados' }
    ]},
    { label: 'Solicitações', icon: 'po-icon po-icon-list', shortLabel: 'Solicitações', subItems: [
      { label: 'Em Espera', link:'solicitations' },
      { label: 'Aprovadas', link:'solicitations' },
      { label: 'Canceladas', link:'solicitations' }
    ]},
    { label: 'Acessores', icon: 'po-icon po-icon-weight', shortLabel: 'Acessores', subItems: [
      { label: 'Favoritos' }
    ]},
    { label: 'Fornecedores', icon: 'po-icon po-icon-pallet-partial', shortLabel: 'Fornecedores', subItems: [
      { label: 'Favoritos' }
    ]},
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }
}
