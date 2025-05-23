import { Component, input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-offer-details-main-info',
  imports: [DividerModule, FlexLayoutModule],
  standalone: true,
  templateUrl: './offer-details-main-info.component.html',
  styleUrl: './offer-details-main-info.component.scss',
})
export class OfferDetailsMainInfoComponent {
  mainInfo = input<{
    horsePower: number;
    engineDisplacement: number;
    mileage: number;
    fuelType: string;
    transmission: string;
    manufacturingYear: number;
    bodyType: string;
  }>();
}
