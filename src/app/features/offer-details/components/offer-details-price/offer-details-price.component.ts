import { Component, input } from '@angular/core';

@Component({
  selector: 'app-offer-details-price',
  imports: [],
  standalone: true,
  templateUrl: './offer-details-price.component.html',
  styleUrl: './offer-details-price.component.scss',
})
export class OfferDetailsPriceComponent {
  price = input<{
    value: number;
    currency: string;
  }>();
}
