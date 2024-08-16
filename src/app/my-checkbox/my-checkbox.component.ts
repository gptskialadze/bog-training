import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'my-checkbox',
  templateUrl: './my-checkbox.component.html',
  styleUrls: ['./my-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyCheckboxComponent),
      multi: true
    }
  ]
})
export class MyCheckboxComponent {
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
