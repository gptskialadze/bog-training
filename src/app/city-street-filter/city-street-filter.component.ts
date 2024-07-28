import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityStreetService } from '../city-street.service';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-city-street-filter',
  templateUrl: './city-street-filter.component.html',
  styleUrls: ['./city-street-filter.component.scss']
})
export class CityStreetFilterComponent implements OnInit {
  form: FormGroup;
  cities$: Observable<{ name: string; streets: string[]; }[]>;
  streets$: Observable<string[]>;

  constructor(private fb: FormBuilder, private cityStreetService: CityStreetService) {
    this.cities$ = of([]);
    this.streets$ = of([]);

    this.form = this.fb.group({
      city: ['', Validators.required],
      street: [{ value: '', disabled: true }]
    });
  }

  ngOnInit(): void {
    // Fetch cities
    this.cities$ = this.cityStreetService.getCities();

    // Update streets based on selected city
    this.streets$ = this.form.get('city')!.valueChanges.pipe(
      switchMap(city => this.cityStreetService.getCities().pipe(
        map(cities => cities.find(c => c.name === city)?.streets || [])
      ))
    );

    // Enable the street dropdown and reset its value when a city is selected
    this.form.get('city')!.valueChanges.subscribe(() => {
      this.form.get('street')!.setValue('');
      this.form.get('street')!.enable();
    });
  }
}
