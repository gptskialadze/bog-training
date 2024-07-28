import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';

  @Input() checkbox1: boolean = true;
  @Input() checkbox2: boolean = false;
  @Input() checkbox3: boolean = true;

  valuesForm: FormGroup<mariami> = new FormGroup<mariami>({
    value1: new FormControl<string >('',{nonNullable:true} ),
    value2: new FormControl<string >('' ,{nonNullable:true}),
    value3: new FormControl<string >({value: '', disabled: true},{nonNullable:true}),
    dropdown: new FormControl<string >('',{nonNullable:true}),
  });

  ngOnInit() {
    combineLatest([
      this.valuesForm.controls.value1.valueChanges,
      this.valuesForm.controls.value2.valueChanges
    ])
      .subscribe(([value1,value2]:[string,string]) => {
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
    ]).subscribe(([value2,value3]:[string,string]) => {
      console.log('value: ' + value2 + ' ' + value3);
      if (Number(value2) === 5 || Number(value3) === 5) {
        console.log('value2 or value3 is 5');
        this.value1?.setValue('5');
      }
    });

    this.valuesForm.controls.value2.valueChanges.subscribe((value2) => {
      if (isNaN(Number(value2))) {
        this.value3?.disable();
      }
    });

    this.valuesForm.controls.dropdown.valueChanges.subscribe((dropdown) => {
      console.log('dropdown: ' + dropdown);
      if (dropdown === 'TB') {
        console.log(this.checkbox1);
        this.checkbox1 = !this.checkbox1;
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
  value2: FormControl<string >
  value3: FormControl<string >
  dropdown: FormControl<string >
}
