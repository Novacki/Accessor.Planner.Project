import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-show-informations',
  templateUrl: './show-informations.component.html',
  styleUrls: ['./show-informations.component.css']
})
export class ShowInformationsComponent implements OnInit {

  constructor() { }

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @Input() public name: string;
  
  ngOnInit(): void {
  }


  close: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Fechar',
    danger: true
  };

}
