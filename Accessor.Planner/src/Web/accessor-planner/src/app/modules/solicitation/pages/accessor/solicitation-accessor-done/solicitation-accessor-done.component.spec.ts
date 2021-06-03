import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationAccessorDoneComponent } from './solicitation-accessor-done.component';

describe('SolicitationAccessorDoneComponent', () => {
  let component: SolicitationAccessorDoneComponent;
  let fixture: ComponentFixture<SolicitationAccessorDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationAccessorDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationAccessorDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
