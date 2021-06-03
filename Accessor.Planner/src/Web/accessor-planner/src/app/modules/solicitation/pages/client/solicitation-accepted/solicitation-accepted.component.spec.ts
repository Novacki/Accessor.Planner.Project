import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationAcceptedComponent } from './solicitation-accepted.component';

describe('SolicitationAcceptedComponent', () => {
  let component: SolicitationAcceptedComponent;
  let fixture: ComponentFixture<SolicitationAcceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationAcceptedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
