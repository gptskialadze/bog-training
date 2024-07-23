import { Component } from '@angular/core';
import {data, cities, streets} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  data = data;
  cities = cities;
  streets = streets;
}
