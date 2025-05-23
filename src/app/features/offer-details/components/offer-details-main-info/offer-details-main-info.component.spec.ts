import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsMainInfoComponent } from './offer-details-main-info.component';

describe('OfferDetailsMainInfoComponent', () => {
  let component: OfferDetailsMainInfoComponent;
  let fixture: ComponentFixture<OfferDetailsMainInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferDetailsMainInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferDetailsMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
