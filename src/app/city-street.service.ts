import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityStreetService {
  private cities = [
    {name: 'Tbilisi', streets: ['street1 Tbilisi', 'street2 Tbilisi', 'street3 Tbilisi']},
    {name: 'Kutaisi', streets: ['street1 Kutaisi', 'street2 Kutaisi', 'street3 Kutaisi']},
    {name: 'Batumi', streets: ['street1 Batumi', 'street2 Batumi', 'street3 Batumi']}
  ];

  getCities(): Observable<{ name: string, streets: string[] }[]> {
    return of(this.cities);
  }
}
