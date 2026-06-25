import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationInterface } from '../housing-location.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.scss'
})
export class HousingLocation {
  readonly housingLocation = input.required<HousingLocationInterface>();
}
