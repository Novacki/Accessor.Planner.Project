import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationAccessorCanceledComponent } from './solicitation-accessor-canceled.component';

describe('SolicitationAccessorCanceledComponent', () => {
  let component: SolicitationAccessorCanceledComponent;
  let fixture: ComponentFixture<SolicitationAccessorCanceledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationAccessorCanceledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationAccessorCanceledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
