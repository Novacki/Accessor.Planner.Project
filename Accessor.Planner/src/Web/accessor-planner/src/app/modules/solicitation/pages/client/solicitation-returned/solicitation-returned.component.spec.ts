import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationReturnedComponent } from './solicitation-returned.component';

describe('SolicitationReturnedComponent', () => {
  let component: SolicitationReturnedComponent;
  let fixture: ComponentFixture<SolicitationReturnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationReturnedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationReturnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
