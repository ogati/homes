import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationInterface } from '../housing-location.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.scss'
})
export class HousingLocation {
  @Input() housingLocation!: HousingLocationInterface;
}
