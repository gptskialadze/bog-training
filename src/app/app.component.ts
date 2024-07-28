import {Component, OnDestroy, OnInit} from '@angular/core';
import {data, cities, streets} from './data';
import {FormControl, FormGroup} from "@angular/forms";
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  filter,
  map,
  of,
  startWith,
  Subscription,
  switchMap,
  tap
} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'myapp';
  data = data;
  cities = cities;
  streets = streets;

  filteredStreets: any[] = [];
  filteredData: any[] = data;
  selectedCity = new FormControl('');
  selectedStreet = new FormControl('');
  namesInput = new FormControl('');

  nameInput$: Subscription = new Subscription();
  selectedCity$: Subscription = new Subscription();
  selectedCitiesAndStreet$: Subscription = new Subscription();

  ngOnInit() {
    this.nameInput$ = this.namesInput.valueChanges.pipe(
      debounceTime(300),
      switchMap(name => of(this.filterData(this.selectedCity.value, this.selectedStreet.value, name)))
    ).subscribe(filteredData => {
      console.log('this.namesInput.valueChanges', filteredData);
      this.filteredData = filteredData;
    });


    this.selectedCity$ = this.selectedCity.valueChanges.pipe(
      tap(city => {console.log('city', city)}),
      startWith('')
    ).subscribe(city => {
      this.filteredStreets = this.streets
        .filter(street => street.city === city);
      this.selectedStreet.setValue(null, {emitEvent: true})
    });

    this.selectedCitiesAndStreet$ = combineLatest([
      this.selectedCity.valueChanges.pipe(startWith('')),
      this.selectedStreet.valueChanges.pipe(startWith(''))
    ]).
    pipe(
      tap(([city, street]) => {console.log('city, street', city, street)}),
      switchMap(
      ([city, street]) => of(this.filterData(city, street, null))))
      .subscribe(filteredData => {
        console.log('this.selectedStreet.valueChanges', filteredData);
        this.namesInput.setValue('', {emitEvent: false});
      this.filteredData = filteredData;
    });
  }

  private filterData(city: string|null, street: string|null, name: string|null) {
    return this.data.filter(item =>
      (!city || item.city === city) &&
      (!street || item.street === street) &&
      (!name || item.name.toLowerCase().includes(name.toLowerCase()))
    );
  }

  ngOnDestroy(): void {
    this.nameInput$.unsubscribe();
    this.selectedCity$.unsubscribe();
    this.selectedCitiesAndStreet$.unsubscribe();
  }
}
