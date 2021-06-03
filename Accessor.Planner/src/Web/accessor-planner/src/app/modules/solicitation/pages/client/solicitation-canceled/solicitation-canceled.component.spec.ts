import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationCanceledComponent } from './solicitation-canceled.component';

describe('SolicitationCanceledComponent', () => {
  let component: SolicitationCanceledComponent;
  let fixture: ComponentFixture<SolicitationCanceledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationCanceledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationCanceledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
