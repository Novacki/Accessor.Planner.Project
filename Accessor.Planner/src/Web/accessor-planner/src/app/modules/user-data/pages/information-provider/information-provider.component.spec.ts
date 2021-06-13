import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationProviderComponent } from './information-provider.component';

describe('InformationProviderComponent', () => {
  let component: InformationProviderComponent;
  let fixture: ComponentFixture<InformationProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
