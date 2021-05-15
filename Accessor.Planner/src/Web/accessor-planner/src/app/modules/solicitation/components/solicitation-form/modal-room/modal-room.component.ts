import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoModalAction, PoModalComponent, PoTableColumn, PoUploadComponent } from '@po-ui/ng-components';
import { ShowInformationsComponent } from 'src/app/Modules/shared/components/show-informations/show-informations.component';
import { Furniture } from 'src/app/modules/shared/model/furniture.model';
import { Room } from 'src/app/modules/shared/model/room.model';
import { FurnitureColumn } from '../../../model/furniture-column.model';

@Component({
  selector: 'app-modal-room',
  templateUrl: './modal-room.component.html',
  styleUrls: ['./modal-room.component.css']
})
export class ModalRoomComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  
  @Output() public room = new EventEmitter<Room>();

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild('upload', { static: true }) upload: PoUploadComponent;
  @ViewChild('information') information: ShowInformationsComponent;

  public form: FormGroup;
  public furnitures: Furniture[] = [];
  public showFurniture: Furniture;

  ngOnInit(): void {
    this.generateForm();
  }

  private generateForm(): void {
    this.form = this.fb.group({
      name:['', Validators.required],
      metreage:['', Validators.required]
    });
  }

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Fechar',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      this.addRoom();
      this.closeModal();
    },
    label: 'Cadastrar',
    disabled: true
  };

  closeModal() {
    this.clearFields();
    this.poModal.close();
  }

  openModal(): void {
    this.poModal.open();
  }

  addRoom(): void {
    this.room.emit(this.form.value);
  }

  public addFurniture(furniture: Furniture) {
    console.log(furniture);
    this.furnitures.push(furniture);
  } 

  public getColumns(): Array<PoTableColumn> {
    return [
      { property: 'name', label: 'Móvel' },
      { property: 'width', label: 'Largura' },
      { property: 'height', label: 'Altura' },
      { 
        property: 'description', 
        label: 'Descrição',
        width:"20%",
        type: 'icon',
        icons: [
          {
            action: this.showDescription.bind(this),
            icon: 'po-icon po-icon-eye',
            tooltip: 'Visualizar',
            value: 'view',
          },
        ]
      },
      {
        property: 'option',
        label: 'Opções',
        width:"20%",
        type: 'icon',
        icons: [
          {
            action: this.removeFurniture.bind(this),
            icon: 'po-icon po-icon-delete',
            tooltip: 'Remover',
            value: 'remove'
          },
        ]
      }
    ]
  }

  public getItems(): FurnitureColumn[] {
    return this.furnitures.map(furniture => {
      return {name: furniture.name, width: furniture.width, height: furniture.height, 
        description: ['view'], option: ['remove'] }
    });
  }

  private removeFurniture(row: FurnitureColumn) {
    let furniture: Furniture = {name: row.name, width: row.width, height: row.height, description: row.description };

    let furnitureResult = this.furnitures.find(value => value.name == furniture.name && 
      value.height == furniture.height && value.width == furniture.width);

    this.furnitures.splice(this.furnitures.indexOf(furnitureResult), 1);
  }

  private clearFields(): void {
    this.form.get('name').setValue('');
    this.form.get('metreage').setValue('');
  }

  private showDescription(row: FurnitureColumn) {
    let furniture: Furniture = {name: row.name, width: row.width, height: row.height, description: row.description };

    this.showFurniture = this.furnitures.find(value => value.name == furniture.name && 
      value.height == furniture.height && value.width == furniture.width);

      this.information.poModal.open();
  }

  @HostListener('change')
  private validForm() {
    this.confirm.disabled = !this.form.valid;
  }
}
