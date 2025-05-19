import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-listing-filters',
  imports: [FlexLayoutModule],
  standalone: true,
  templateUrl: './listing-filters.component.html',
  styleUrl: './listing-filters.component.scss',
})
export class ListingFiltersComponent {}
