import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsPriceComponent } from './offer-details-price.component';

describe('OfferDetailsPriceComponent', () => {
  let component: OfferDetailsPriceComponent;
  let fixture: ComponentFixture<OfferDetailsPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferDetailsPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferDetailsPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
