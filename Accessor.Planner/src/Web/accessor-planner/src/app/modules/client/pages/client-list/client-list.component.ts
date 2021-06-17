import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { UserType } from 'src/app/modules/shared/enum/user-type';
import { Client } from 'src/app/modules/shared/model/client.model';
import { ClientService } from 'src/app/Modules/shared/services/client.service';
import { ClientColumn } from '../../model/client-column.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private clientService: ClientService) { }
  public clients: Client[];
  public loading: boolean = false;

  ngOnInit(): void {
    let type;
    this.loading = true;
    if(JSON.parse(localStorage.getItem('client'))) {
      type = JSON.parse(localStorage.getItem('client')).type == UserType.accessor ? UserType.client : UserType.accessor;

      this.clientService.getAllFullDataByUserType(type).subscribe(clients => {
        this.clients = clients;
        this.loading = false;
      });
    } else {
      this.clientService.getAllFullDataByUserType(UserType.accessor).subscribe(clients => {
        this.clients = clients;
        this.loading = false;
      });
    }
  }

  public getColumns(): Array<PoTableColumn> {
    return [
      { property: 'name', label: 'Nome', width: '15%' },
      { property: 'phone', label: 'Telefone', width: '15%' },
      { property: 'email', label: 'E-mail', width: '15%' },
      // {
      //   property: 'options',
      //   label: 'Opções',
      //   width: "10%",
      //   type: 'icon',
      //   icons: [
      //     {
      //       icon: 'po-icon po-icon-export',
      //       tooltip: 'Operações',
      //       value: 'view',
      //       // action: this.openModalOperation.bind(this)
      //     }
      //   ]
      // }
    ]
  }

  public getItems(): ClientColumn[] {
    if(this.clients) {
      return this.clients.map(client => {
        return { name: client.name, phone: client.phone, email: client.user.email };
      }); 
    }
  }
}
