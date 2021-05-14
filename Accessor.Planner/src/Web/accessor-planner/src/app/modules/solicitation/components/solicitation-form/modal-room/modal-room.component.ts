import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { Room } from 'src/app/modules/shared/model/room.model';

@Component({
  selector: 'app-modal-room',
  templateUrl: './modal-room.component.html',
  styleUrls: ['./modal-room.component.css']
})
export class ModalRoomComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  
  @Output() public room = new EventEmitter<Room>();

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  public form: FormGroup;

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

  private clearFields(): void {
    this.form.get('name').setValue('');
    this.form.get('metreage').setValue('');
  }

  @HostListener('change')
  private validForm() {
    this.confirm.disabled = !this.form.valid;
  }
}
