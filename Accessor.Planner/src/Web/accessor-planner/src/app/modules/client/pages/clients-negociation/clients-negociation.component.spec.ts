import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsNegociationComponent } from './clients-negociation.component';

describe('ClientsNegociationComponent', () => {
  let component: ClientsNegociationComponent;
  let fixture: ComponentFixture<ClientsNegociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsNegociationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsNegociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
