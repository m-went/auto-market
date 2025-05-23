import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsPageComponent } from './offer-details-page.component';

describe('OfferDetailsPageComponent', () => {
  let component: OfferDetailsPageComponent;
  let fixture: ComponentFixture<OfferDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
