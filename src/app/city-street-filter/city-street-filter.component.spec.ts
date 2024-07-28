import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityStreetFilterComponent } from './city-street-filter.component';

describe('CityStreetFilterComponent', () => {
  let component: CityStreetFilterComponent;
  let fixture: ComponentFixture<CityStreetFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityStreetFilterComponent]
    });
    fixture = TestBed.createComponent(CityStreetFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
