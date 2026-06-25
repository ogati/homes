import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocation } from './housing-location';
import { provideRouter } from '@angular/router';
import { HousingLocationInterface } from '../housing-location.interface';

describe('HousingLocation', () => {
  let component: HousingLocation;
  let fixture: ComponentFixture<HousingLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocation],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HousingLocation);
    fixture.componentRef.setInput('housingLocation', {
      id: 1,
      name: 'Test House',
      city: 'Toronto',
      state: '',
      photo: '',
      availableUnits: 0,
      wifi: false,
      laundry: true
    } satisfies HousingLocationInterface);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
