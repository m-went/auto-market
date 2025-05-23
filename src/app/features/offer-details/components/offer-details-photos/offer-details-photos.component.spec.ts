import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsPhotosComponent } from './offer-details-photos.component';

describe('OfferDetailsPhotosComponent', () => {
  let component: OfferDetailsPhotosComponent;
  let fixture: ComponentFixture<OfferDetailsPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferDetailsPhotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferDetailsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
