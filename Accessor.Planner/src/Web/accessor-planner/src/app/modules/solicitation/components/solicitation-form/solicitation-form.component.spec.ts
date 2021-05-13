import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationFormComponent } from './solicitation-form.component';

describe('SolicitationFormComponent', () => {
  let component: SolicitationFormComponent;
  let fixture: ComponentFixture<SolicitationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
