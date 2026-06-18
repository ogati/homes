import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationInterface } from '../housing-location.interface';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location/housing-location';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    HousingLocation
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  housingService = inject(HousingService);
  housingLocationList: HousingLocationInterface[] = [];
  filteredLocationList: HousingLocationInterface[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
  
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
