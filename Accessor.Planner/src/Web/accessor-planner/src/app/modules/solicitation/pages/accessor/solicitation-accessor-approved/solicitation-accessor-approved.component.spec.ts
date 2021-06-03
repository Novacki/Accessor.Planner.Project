import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationAccessorApprovedComponent } from './solicitation-accessor-approved.component';

describe('SolicitationAccessorApprovedComponent', () => {
  let component: SolicitationAccessorApprovedComponent;
  let fixture: ComponentFixture<SolicitationAccessorApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationAccessorApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationAccessorApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
