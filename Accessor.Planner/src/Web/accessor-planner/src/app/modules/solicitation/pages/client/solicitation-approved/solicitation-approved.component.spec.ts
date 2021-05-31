import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationApprovedComponent } from './solicitation-approved.component';

describe('SolicitationApprovedComponent', () => {
  let component: SolicitationApprovedComponent;
  let fixture: ComponentFixture<SolicitationApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
