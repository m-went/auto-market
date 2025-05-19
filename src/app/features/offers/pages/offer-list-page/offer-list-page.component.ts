import { Component } from '@angular/core';
import { ListingFiltersComponent } from '../../components/listing-filters/listing-filters.component';
import { ListingOfferBarComponent } from '../../components/listing-offer-bar/listing-offer-bar.component';
import { MatListModule } from '@angular/material/list';

interface CarInfo {
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
}

@Component({
  selector: 'app-offer-list-page',
  imports: [ListingFiltersComponent, ListingOfferBarComponent, MatListModule],
  standalone: true,
  templateUrl: './offer-list-page.component.html',
  styleUrl: './offer-list-page.component.scss',
})
export class OfferListPageComponent {
  foundOffersNumber = 15;
  categoryName = 'Samochody osobowe';
  carsData: CarInfo[] = [];
  /*  carsData = [
    {
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
    },
    {
      offerId: 2,
      title: 'Audi A3',
      horsePower: 120, // KM
      engineDisplacement: 1458, // cm3
      mileage: 230000, //km
      fuelType: 'diesel',
      transmission: 'manual',
      manufacturingYear: 2008,
      location: {
        city: 'Rumia',
        postCode: '84-230',
        country: 'PL',
        voivodeship: 'Pomorskie',
      },
      price: {
        value: 15000,
        currency: 'PLN',
      },
    },
  ]; */
}
