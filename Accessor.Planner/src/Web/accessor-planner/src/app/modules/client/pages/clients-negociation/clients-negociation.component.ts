import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { UserType } from 'src/app/modules/shared/enum/user-type';
import { Client } from 'src/app/modules/shared/model/client.model';
import { ClientService } from 'src/app/Modules/shared/services/client.service';
import { ClientColumn } from '../../model/client-column.model';

@Component({
  selector: 'app-clients-negociation',
  templateUrl: './clients-negociation.component.html',
  styleUrls: ['./clients-negociation.component.css']
})
export class ClientsNegociationComponent implements OnInit {

  constructor(private clientService: ClientService) { }
  public clients: Client[];

  ngOnInit(): void {
    let type = JSON.parse(localStorage.getItem('client')).type == UserType.accessor ? UserType.client : UserType.accessor;

    this.clientService.getAllFullDataByUserType(type).subscribe(clients => {
      this.clients = clients;
    });
  }

  public getColumns(): Array<PoTableColumn> {
    return [
      { property: 'name', label: 'Nome', width: '15%' },
      { property: 'phone', label: 'Telefone', width: '15%' },
      { property: 'email', label: 'E-mail', width: '15%' },
      {
        property: 'options',
        label: 'Opções',
        width: "10%",
        type: 'icon',
        icons: [
          {
            icon: 'po-icon po-icon-export',
            tooltip: 'Operações',
            value: 'view',
            // action: this.openModalOperation.bind(this)
          }
        ]
      }
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
