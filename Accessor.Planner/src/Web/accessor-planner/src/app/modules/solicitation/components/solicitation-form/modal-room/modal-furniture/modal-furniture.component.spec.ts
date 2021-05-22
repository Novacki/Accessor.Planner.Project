import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFurnitureComponent } from './modal-furniture.component';

describe('ModalFurnitureComponent', () => {
  let component: ModalFurnitureComponent;
  let fixture: ComponentFixture<ModalFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFurnitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
