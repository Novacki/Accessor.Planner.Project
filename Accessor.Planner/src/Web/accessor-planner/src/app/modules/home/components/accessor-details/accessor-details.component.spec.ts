import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessorDetailsComponent } from './accessor-details.component';

describe('AccessorDetailsComponent', () => {
  let component: AccessorDetailsComponent;
  let fixture: ComponentFixture<AccessorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
