import { Component } from '@angular/core';
import {FormControl, FormGroup, ValidatorFn} from "@angular/forms";
import {combineLatest, Observable} from "rxjs";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';

  // valuesRequired: ValidatorFn = (control) => {
  //   return control.get("value1") && control.get("value2") ? null : { valuesRequired: true };
  //
  // }

  valuesForm: FormGroup<mariami> = new FormGroup<mariami>({
    value1: new FormControl<string >('',{nonNullable:true} ),
    value2: new FormControl<number >(0 ,{nonNullable:true}),
    value3: new FormControl<string >({value: '', disabled: true},{nonNullable:true}),
    dropdown: new FormControl<string >('',{nonNullable:true}),
  });

  ngOnInit() {
    combineLatest([
      this.valuesForm.controls.value1.valueChanges,
      this.valuesForm.controls.value2.valueChanges
    ])
      .subscribe(([value1,value2]:[string,number]) => {
        console.log('value: ' + value1 + ' ' + value2);
        if (value1 && value2) {
          this.value3?.enable()
        } else {
          this.value3?.disable();
        }
      });

    combineLatest([
      this.valuesForm.controls.value2.valueChanges,
      this.valuesForm.controls.value3.valueChanges
    ])
      .subscribe(([value2,value3]:[number,string]) => {
        console.log('value: ' + value2 + ' ' + value3);
        if (value2 + toNumbers(value3)[0] === 5) {
          this.value3?.enable()
        } else {
          this.value3?.disable();
        }
      });
  }

  make3Valid() {
    console.log('make3Valid');
    this.value3?.enable()
    return null;
  }


  onSubmit() {
    console.log(this.valuesForm.value);
  }


  get value1() {
    return this.valuesForm.get('value1');
  }
  get value2() {
    return this.valuesForm.get('value2');
  }
  get value3() {
    return this.valuesForm.get('value3');
  }

  get dropdown() {
    return this.valuesForm.get('dropdown');
  }
}

interface mariami{
  value1: FormControl<string >
  value2: FormControl<number >
  value3: FormControl<string >
  dropdown: FormControl<string >
}
