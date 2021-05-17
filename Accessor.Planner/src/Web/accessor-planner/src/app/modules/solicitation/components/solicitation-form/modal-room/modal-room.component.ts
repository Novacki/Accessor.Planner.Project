import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
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

  
  @Output() public roomRegister = new EventEmitter<Room>();
  @Output() public roomEdit = new EventEmitter<Room>();
  
  private room: Room;
  private formValid: boolean = true;
  private initialRooms: string;

  @Input() public set setRoom(value: Room) {
    this.room = value;
    this.initialRooms = JSON.stringify(value);

    this.populateFrom(this.room);
  } 


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
      metreage:['', Validators.required],
      description:['', Validators.required]
    });
  }

  private populateFrom(room: Room): void {
    this.form.get('name').setValue(room.name);
    this.form.get('metreage').setValue(room.metreage);
    this.form.get('description').setValue(room.description);
    this.furnitures = room.furnitures;
  }

  close: PoModalAction = {
    action: () => {
      if(this.room)
        this.restoreFurnitures();

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
    disabled: this.formValid
  };

  edit: PoModalAction = {
    action: () => {
      this.editRoom();
      this.closeModal();
    },

    label: 'Editar',
    disabled: !this.formValid
  };

  public getOperation(): PoModalAction {
    return this.room ? this.edit : this.confirm;
  }

  public closeModal() {
    this.clearFields();
    this.poModal.close();
  }

  public openModal(): void {
    this.validForm();
    this.poModal.open();
  }

  public addRoom(): void {
    let room: Room = { 
      name: this.form.get('name').value,
      metreage: this.form.get('metreage').value,
      description: this.form.get('description').value,
      furnitures: this.furnitures,
    }

    this.roomRegister.emit(room);
  }

  public editRoom(): void {
    let room: Room = { 
      name: this.form.get('name').value,
      metreage: this.form.get('metreage').value,
      description: this.form.get('description').value,
      furnitures: this.furnitures,
    }

    this.roomEdit.emit(room);
  }

  public addFurniture(furniture: Furniture) {
    this.furnitures.push(furniture);
    this.validForm();
  } 

  public getColumns(): Array<PoTableColumn> {
    return [
      { property: 'name', label: 'Móvel' },
      { property: 'height', label: 'Altura' },
      { property: 'width', label: 'Largura' },
      { property: 'length', label: 'Comprimento', width:"20%" },
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
      return {name: furniture.name, width: furniture.width, height: furniture.height, length: furniture.length,
        description: ['view'], option: ['remove'] }
    });
  }

  private removeFurniture(row: FurnitureColumn) {

    let furnitureResult = this.getFurnitureByRow(row);

    this.furnitures.splice(this.furnitures.indexOf(furnitureResult), 1);
    this.validForm();
  }

  private clearFields(): void {
    this.form.get('name').setValue('');
    this.form.get('metreage').setValue('');
    this.form.get('description').setValue('');
    this.furnitures = [];
    this.initialRooms = null;
    this.room = null;
  }

  private showDescription(row: FurnitureColumn) {

    this.showFurniture = this.getFurnitureByRow(row);

      this.information.poModal.open();
  }

  @HostListener('change')
  private validForm() {
    this.formValid = !this.form.valid || this.furnitures.length == 0;
    
    if(this.room) {
      let room: Room = { 
        name: this.form.get('name').value,
        metreage: this.form.get('metreage').value,
        description: this.form.get('description').value,
        furnitures: this.furnitures,
      }

      this.room = room;
      this.edit.disabled = this.formValid;
    } else {
      this.confirm.disabled = this.formValid;
    }
  }

  private getFurnitureByRow(row: FurnitureColumn) : Furniture {
    let furniture: Furniture = {name: row.name, width: row.width, height: row.height, length: row.length, description: row.description };

    return this.furnitures.find(value => value.name == furniture.name && 
      value.height == furniture.height && value.width == furniture.width && value.length == furniture.length);
  }

  private restoreFurnitures(): void {
    this.roomEdit.emit(JSON.parse(this.initialRooms) as Room);
  }
}
