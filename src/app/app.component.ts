import {Component, OnInit} from '@angular/core';
import {data, cities, streets} from './data';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myapp';
  data = data;
  cities = cities;
  streets = streets;
  filteredStreets: any[] = [];
  filteredData = data;
  regForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.regForm = this.fb.group({
      city: ['Tbilisi'],
      street: [],
      name: []
    });
  }

  ngOnInit() {
    combineLatest([this.regForm.get("city")?.valueChanges])
      .subscribe((value) => {
        console.log("city value changed to " + this.regForm.get("city")?.getRawValue());
        this.filteredStreets = streets.filter(street => street.city === this.regForm.get("city")?.getRawValue());
      });

    combineLatest([this.regForm.get("city")?.valueChanges, this.regForm.get("street")?.valueChanges])
      .subscribe(value => {
        console.log("street value changed to: " + this.regForm.get("street")?.getRawValue());
        console.log("and city value set to: " + this.regForm.get("city")?.getRawValue());
        this.filteredData = data.filter(data => (data.city === this.regForm.get("city")?.getRawValue()) &&
          (data.street === this.regForm.get("street")?.getRawValue()))
      });
    combineLatest([this.regForm.get("name")?.valueChanges])
      .subscribe(value => {
        this.filteredData = data.filter(data =>
          (data.city.includes(this.regForm.get("name")?.getRawValue())) ||
          (data.street.includes(this.regForm.get("name")?.getRawValue())) ||
          (data.name.includes(this.regForm.get("name")?.getRawValue())) ||
          (data.id.toString().includes(this.regForm.get("name")?.getRawValue())))
      });
  }


}

interface IInputForm {
  city: FormControl<string>;
  street: FormControl<string>;
  name: FormControl<string>;
}

interface filteredStreets {
  id: number;
  city: string;
  name: string;
}
