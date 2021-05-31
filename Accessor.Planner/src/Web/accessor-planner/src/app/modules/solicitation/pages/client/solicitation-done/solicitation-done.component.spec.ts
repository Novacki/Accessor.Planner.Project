import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationDoneComponent } from './solicitation-done.component';

describe('SolicitationDoneComponent', () => {
  let component: SolicitationDoneComponent;
  let fixture: ComponentFixture<SolicitationDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
