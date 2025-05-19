import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingOfferBarComponent } from './listing-offer-bar.component';

describe('ListingOfferBarComponent', () => {
  let component: ListingOfferBarComponent;
  let fixture: ComponentFixture<ListingOfferBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingOfferBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingOfferBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
