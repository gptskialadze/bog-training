import {Component, OnDestroy, OnInit} from '@angular/core';
import {data, cities, streets} from './data';
import {combineLatest, debounceTime, of, startWith, Subscription, switchMap, tap} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {IRegForm} from "./models";

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

  inputForm: FormGroup<IRegForm> = new FormGroup<IRegForm> ({
    selectedCity: new FormControl<string|null>(''),
    selectedStreet: new FormControl<string|null>(''),
    inputName: new FormControl<string|null>('')
  });

  filteredStreets: any[] = [];
  filteredData: any[] = data;

  selectedCity$: Subscription = new Subscription();
  selectedCityAndStreet$: Subscription = new Subscription();
  inputName$: Subscription = new Subscription();

  ngOnInit(): void {
    this.selectedCity$ = this.inputForm.controls.selectedCity.valueChanges.pipe(
      startWith(''),
      tap(city => console.log('current selected city: ', city)),
    ).subscribe(city => {
      this.filteredStreets = this.streets.filter(street => street.city === city);
      this.inputForm.controls.selectedStreet.setValue(null, { emitEvent: true });
    });

    this.selectedCityAndStreet$ = combineLatest([
      this.inputForm.controls.selectedCity.valueChanges.pipe(startWith(this.inputForm.controls.selectedCity.value)),
      this.inputForm.controls.selectedStreet.valueChanges.pipe(startWith(this.inputForm.controls.selectedStreet.value))
    ]).pipe(
      tap(([city, street]) => console.log('current selected city, street:', city, street))
    ).subscribe(([city, street]) => {
      this.filteredStreets = this.streets.filter(streetItem =>
        (!city || streetItem.city === city)
      );

      if (city && street) {
        this.filteredData = this.filterData(city, street);
      } else {
        this.filteredData = data;
      }
    });


    this.inputName$ = this.inputForm.controls.inputName.valueChanges.pipe(
      debounceTime(300),
      switchMap(name => of(
        this.filterData(
          this.inputForm.controls.selectedCity.value,
          this.inputForm.controls.selectedStreet.value,
          name)
        )
      )
    ).subscribe(filteredData => {
      console.log('this.namesInput.valueChanges', filteredData);
      this.filteredData = filteredData;
    });

    this.inputForm.controls.inputName.valueChanges.pipe(
      debounceTime(300),
      startWith(this.inputForm.controls.inputName.value),
      switchMap(name => {
        return of(this.filterData(this.inputForm.controls.selectedCity.value, this.inputForm.controls.selectedStreet.value, name));
      })
    ).subscribe(filteredData => {
      console.log('Filtered data based on inputName:', filteredData);
      this.filteredData = filteredData;
    })
  }

  ngOnDestroy(): void {
    this.selectedCity$.unsubscribe();
    this.selectedCityAndStreet$.unsubscribe();
    this.inputName$.unsubscribe();
  }

  private filterData(city: string | null = null, street: string | null = null, name: string | null = null): any[] {
    return this.data.filter(item =>
      (!city || item.city === city) &&
      (!street || item.street === street) &&
      (!name || item.name.includes(name))
    );
  }
}
