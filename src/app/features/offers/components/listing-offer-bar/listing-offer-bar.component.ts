import { Component, input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-listing-offer-bar',
  imports: [FlexLayoutModule],
  standalone: true,
  templateUrl: './listing-offer-bar.component.html',
  styleUrl: './listing-offer-bar.component.scss',
})
export class ListingOfferBarComponent {
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
}
