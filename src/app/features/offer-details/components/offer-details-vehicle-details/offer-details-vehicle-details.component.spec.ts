import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsVehicleDetailsComponent } from './offer-details-vehicle-details.component';

describe('OfferDetailsVehicleDetailsComponent', () => {
  let component: OfferDetailsVehicleDetailsComponent;
  let fixture: ComponentFixture<OfferDetailsVehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferDetailsVehicleDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferDetailsVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
