import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationInReviewComponent } from './solicitation-in-review.component';

describe('SolicitationInReviewComponent', () => {
  let component: SolicitationInReviewComponent;
  let fixture: ComponentFixture<SolicitationInReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationInReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationInReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
