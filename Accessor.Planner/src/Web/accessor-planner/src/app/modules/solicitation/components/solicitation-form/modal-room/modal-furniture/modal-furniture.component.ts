import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { Furniture } from 'src/app/modules/shared/model/furniture.model';

@Component({
  selector: 'app-modal-furniture',
  templateUrl: './modal-furniture.component.html',
  styleUrls: ['./modal-furniture.component.css']
})
export class ModalFurnitureComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  @Output('addFurniture') public forniture = new EventEmitter<Furniture>();
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
 
  public form: FormGroup;
  
  ngOnInit(): void {
    this.generateForm();
  }

  private generateForm(): void {
    this.form = this.fb.group({
      name:['', Validators.required],
      width:['', Validators.required],
      height:['', Validators.required],
      length:['', Validators.required],
      description:['', Validators.required]
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
      this.addFurnirue();
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

  private clearFields(): void {
    this.form.get('name').setValue('');
    this.form.get('width').setValue('');
    this.form.get('height').setValue('');
    this.form.get('length').setValue('');
    this.form.get('description').setValue('');
  }

  @HostListener('change')
  private validForm() {
    this.confirm.disabled = !this.form.valid;
  }

  private addFurnirue() {
    this.forniture.emit(this.form.value);
  }
}
