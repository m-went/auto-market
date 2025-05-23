import { Component, Input } from '@angular/core';
import { OfferDetailsPhotosComponent } from '../../components/offer-details-photos/offer-details-photos.component';
import { OfferDetailsPriceComponent } from '../../components/offer-details-price/offer-details-price.component';
import { OfferDetailsDescriptionComponent } from '../../components/offer-details-description/offer-details-description.component';
import { OfferDetailsMainInfoComponent } from '../../components/offer-details-main-info/offer-details-main-info.component';
import { OfferDetailsVehicleDetailsComponent } from '../../components/offer-details-vehicle-details/offer-details-vehicle-details.component';

@Component({
  selector: 'app-offer-details-page',
  imports: [
    OfferDetailsPhotosComponent,
    OfferDetailsPriceComponent,
    OfferDetailsDescriptionComponent,
    OfferDetailsMainInfoComponent,
    OfferDetailsVehicleDetailsComponent,
  ],
  standalone: true,
  templateUrl: './offer-details-page.component.html',
  styleUrl: './offer-details-page.component.scss',
})
export class OfferDetailsPageComponent {
  offerID: string | undefined = undefined;
  offerDetails = {
    offerId: 1,
    title: 'Audi A4',
    horsePower: 180, // KM
    engineDisplacement: 1968, // cm3
    mileage: 190000, //km
    fuelType: 'diesel',
    transmission: 'automatic',
    manufacturingYear: 2013,
    location: {
      city: 'Rumia',
      postCode: '84-230',
      country: 'PL',
      voivodeship: 'Pomorskie',
    },
    price: {
      value: 55000,
      currency: 'PLN',
    },
    images: ['/images/audi_photo1.jpg'],
  };
  @Input()
  set id(offerID: string) {
    this.offerID = offerID;
    console.log('Offer ID:', this.offerID);
  }
}
