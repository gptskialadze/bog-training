import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CityStreetService} from '../city-street.service';
import {combineLatest, debounceTime, Observable, of, startWith} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-city-street-filter',
  templateUrl: './city-street-filter.component.html',
  styleUrls: ['./city-street-filter.component.scss']
})
export class CityStreetFilterComponent implements OnInit {
  form: FormGroup;
  cities$: Observable<{ name: string; streets: string[]; }[]>;
  streets$: Observable<string[]>;
  filteredData$: Observable<any[]>;

  constructor(private fb: FormBuilder, private cityStreetService: CityStreetService) {
    this.cities$ = of([]);
    this.streets$ = of([]);
    this.filteredData$ = of([]);

    this.form = this.fb.group({
      city: ['', Validators.required],
      street: [{value: '', disabled: true}],
      name: ['']
    });
  }

  ngOnInit(): void {
    this.cities$ = this.cityStreetService.getCities();

    // Update streets based on selected city
    this.streets$ = this.form.get('city')!.valueChanges.pipe(
      startWith(this.form.get('city')!.value),
      switchMap(city => this.cityStreetService.getCities().pipe(
        map(cities => cities.find(c => c.name === city)?.streets || [])
      ))
    );

    // Enable street selection after city is selected
    this.form.get('city')!.valueChanges.subscribe(() => {
      this.form.get('street')!.setValue('');
      this.form.get('street')!.enable();
    });

    // Filtering data based on form controls
    this.filteredData$ = combineLatest([
      this.form.get('city')!.valueChanges.pipe(startWith(this.form.get('city')!.value)),
      this.form.get('street')!.valueChanges.pipe(startWith(this.form.get('street')!.value)),
      this.form.get('name')!.valueChanges.pipe(
        startWith(this.form.get('name')!.value),
        debounceTime(3000)  // 3 seconds debounce
      )
    ]).pipe(
      switchMap(([city, street, name]) => {
        console.log('City:', city, 'Street:', street, 'Name:', name);
        return this.cityStreetService.getData().pipe(
          map(data => {
            console.log('Original Data:', data);
            const filtered = data.filter(item =>
              (!city || item.city === city) &&
              (!street || item.street === street) &&
              (!name ||
                item.name.toLowerCase().includes(name) ||
                item.city.toLowerCase().includes(name) ||
                item.street.toLowerCase().includes(name) ||
                item.id.toString().includes(name))
            );
            console.log('Filtered Data:', filtered);
            return filtered;
          })
        );
      })
    );
  }
}
