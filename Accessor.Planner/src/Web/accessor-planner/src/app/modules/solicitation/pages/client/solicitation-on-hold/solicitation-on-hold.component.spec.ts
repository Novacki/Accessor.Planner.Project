import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationOnHoldComponent } from './solicitation-on-hold.component';

describe('SolicitationOnHoldComponent', () => {
  let component: SolicitationOnHoldComponent;
  let fixture: ComponentFixture<SolicitationOnHoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationOnHoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationOnHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
