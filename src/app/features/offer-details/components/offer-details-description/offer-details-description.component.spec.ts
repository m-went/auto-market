import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsDescriptionComponent } from './offer-details-description.component';

describe('OfferDetailsDescriptionComponent', () => {
  let component: OfferDetailsDescriptionComponent;
  let fixture: ComponentFixture<OfferDetailsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferDetailsDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferDetailsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
