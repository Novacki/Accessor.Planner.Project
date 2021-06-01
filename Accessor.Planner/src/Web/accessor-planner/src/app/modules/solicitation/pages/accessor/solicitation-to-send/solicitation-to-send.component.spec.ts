import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationToSendComponent } from './solicitation-to-send.component';

describe('SolicitationToSendComponent', () => {
  let component: SolicitationToSendComponent;
  let fixture: ComponentFixture<SolicitationToSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationToSendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationToSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
