import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCheckboxComponent } from './my-checkbox.component';

describe('MyCheckboxComponent', () => {
  let component: MyCheckboxComponent;
  let fixture: ComponentFixture<MyCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCheckboxComponent]
    });
    fixture = TestBed.createComponent(MyCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
