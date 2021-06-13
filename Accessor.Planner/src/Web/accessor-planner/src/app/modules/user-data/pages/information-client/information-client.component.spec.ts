import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationClientComponent } from './information-client.component';

describe('InformationClientComponent', () => {
  let component: InformationClientComponent;
  let fixture: ComponentFixture<InformationClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
