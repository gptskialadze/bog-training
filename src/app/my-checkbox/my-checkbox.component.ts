import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-my-checkbox',
  templateUrl: './my-checkbox.component.html',
  styleUrls: ['./my-checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MyCheckboxComponent),
    multi: true
  }]
})
export class MyCheckboxComponent implements ControlValueAccessor {

  checked: boolean = false;

  set value(value: any) {
    this.checked = value;
    this.onChange(value);
    this.onTouch(value);
  }

  get value() {
    return this.checked;
  }

  onChange: any = () => {};
  onTouch: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(obj: any): void {
    this.checked = obj;
  }
}
