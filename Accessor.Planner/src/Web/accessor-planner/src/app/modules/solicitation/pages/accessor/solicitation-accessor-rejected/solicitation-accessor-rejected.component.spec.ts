import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationAccessorRejectedComponent } from './solicitation-accessor-rejected.component';

describe('SolicitationAccessorRejectedComponent', () => {
  let component: SolicitationAccessorRejectedComponent;
  let fixture: ComponentFixture<SolicitationAccessorRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationAccessorRejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationAccessorRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
