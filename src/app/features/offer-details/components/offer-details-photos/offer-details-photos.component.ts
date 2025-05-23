import { Component, input } from '@angular/core';

@Component({
  selector: 'app-offer-details-photos',
  imports: [],
  standalone: true,
  templateUrl: './offer-details-photos.component.html',
  styleUrl: './offer-details-photos.component.scss',
})
export class OfferDetailsPhotosComponent {
  images = input<string[]>([]);
}
