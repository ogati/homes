import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HousingLocationInterface } from '../housing-location.interface';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location/housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HousingLocation
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  housingService = inject(HousingService);
  housingLocationList: HousingLocationInterface[] = [];
  filteredLocationList: HousingLocationInterface[] = [];

  ngOnInit(): void {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  handleFilterSubmit(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
