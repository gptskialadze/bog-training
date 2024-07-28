import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {data} from "./data";

@Injectable({
  providedIn: 'root'
})
export class CityStreetService {
  private cities = [
    {name: 'Tbilisi', streets: ['street1 Tbilisi', 'street2 Tbilisi', 'street3 Tbilisi']},
    {name: 'Qutaisi', streets: ['street1 Qutaisi', 'street2 Qutaisi', 'street3 Qutaisi']},
    {name: 'Batumi', streets: ['street1 Batumi', 'street2 Batumi', 'street3 Batumi']}
  ];

  private data = data;

  getCities(): Observable<{ name: string, streets: string[] }[]> {
    return of(this.cities);
  }

  getData(): Observable<{ id: number, city: string, street: string, name: string }[]> {
    return of(this.data);
  }
}
