import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OfferListPageComponent } from './features/offers/pages/offer-list-page/offer-list-page.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'list', component: OfferListPageComponent },
];
