import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationRejectedComponent } from './solicitation-rejected.component';

describe('SolicitationRejectedComponent', () => {
  let component: SolicitationRejectedComponent;
  let fixture: ComponentFixture<SolicitationRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationRejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
