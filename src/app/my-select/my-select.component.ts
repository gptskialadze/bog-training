import { Component, forwardRef } from '@angular/core';
import { cities } from '../cities';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MySelectComponent),
      multi: true
    }
  ]
})
export class MySelectComponent implements ControlValueAccessor {
  cities = cities;
  val: string = "";

  onChange: any = () => {}
  onTouch: any = () => {}


 set value(value: any) {
   this.val = value
   this.onChange(value);
   this.onTouch(value)
 }

 get value() {
  return this.val
 }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

}
