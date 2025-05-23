import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OfferListPageComponent } from './features/offers/pages/offer-list-page/offer-list-page.component';
import { OfferDetailsPageComponent } from './features/offer-details/pages/offer-details-page/offer-details-page.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'list', component: OfferListPageComponent },
  { path: 'offer/:id', component: OfferDetailsPageComponent },
];
