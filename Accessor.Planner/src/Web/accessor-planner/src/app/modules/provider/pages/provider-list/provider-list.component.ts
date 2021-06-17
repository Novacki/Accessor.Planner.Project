import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Provider } from 'src/app/modules/shared/model/provider.model';
import { ProviderService } from 'src/app/modules/shared/services/provider.service';
import { ProviderColumn } from '../../model/provider-column.model';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.loading = true;
    this.providerService.getAll().subscribe(providers => {
      this.providers = providers;
      this.loading = false;
    });
  }

  public providers: Provider[];
  public loading: boolean = false;

  public getColumns(): Array<PoTableColumn> {
    return [
      { property: 'fantasyName', label: 'Nome Fantasia', width: '15%' },
      { property: 'socialReason', label: 'Razão Social', width: '15%' },
      { property: 'cnpj', label: 'CNPJ', width: '15%' },
      { property: 'phone', label: 'Telefone', width: '15%' },
      { property: 'email', label: 'E-mail', width: '15%' },
    ]
  }

  public getItems(): ProviderColumn[] {
    if(this.providers) {
      return this.providers.map(p => {
        return { cnpj: p.cnpj, socialReason: p.socialReason, email: p.user.email, fantasyName: p.fantasyName, phone: p.phone };
      });
    }
  }
}
