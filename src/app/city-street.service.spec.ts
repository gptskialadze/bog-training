import { TestBed } from '@angular/core/testing';

import { CityStreetService } from './city-street.service';

describe('CityStreetService', () => {
  let service: CityStreetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityStreetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
