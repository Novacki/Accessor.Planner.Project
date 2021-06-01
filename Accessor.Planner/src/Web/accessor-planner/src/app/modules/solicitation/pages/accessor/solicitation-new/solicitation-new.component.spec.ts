import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationNewComponent } from './solicitation-new.component';

describe('SolicitationNewComponent', () => {
  let component: SolicitationNewComponent;
  let fixture: ComponentFixture<SolicitationNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
