import { Component, input, model } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-offer-details-photos',
  imports: [GalleriaModule],
  standalone: true,
  templateUrl: './offer-details-photos.component.html',
  styleUrl: './offer-details-photos.component.scss',
})
export class OfferDetailsPhotosComponent {
  images = input<
    {
      itemImageSrc: string;
      thumbnailImageSrc: string;
      alt: string;
      title: string;
    }[]
  >([]);

  responsiveOptions: any[] = [
    {
      breakpoint: '700px',
      numVisible: 3,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];
}
