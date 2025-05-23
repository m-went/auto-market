import { Component, inject, input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-offer-bar',
  imports: [FlexLayoutModule],
  standalone: true,
  templateUrl: './listing-offer-bar.component.html',
  styleUrl: './listing-offer-bar.component.scss',
})
export class ListingOfferBarComponent {
  private readonly router = inject(Router);

  carInfo = input<{
    offerId: number;
    title: string;
    horsePower: number; // KM
    engineDisplacement: number; // cm3
    mileage: number; //km
    fuelType: string;
    transmission: string;
    manufacturingYear: number;
    location: {
      city: string;
      postCode: string;
      country: string;
      voivodeship: string;
    };
    price: {
      value: number;
      currency: string;
    };
  } | null>(null);
  goToOffer(offerID: number) {
    this.router.navigate(['/offer', offerID]);
  }
}
