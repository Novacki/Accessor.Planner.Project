import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationOperationComponent } from './solicitation-operation.component';

describe('SolicitationOperationComponent', () => {
  let component: SolicitationOperationComponent;
  let fixture: ComponentFixture<SolicitationOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
