import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, map, startWith, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form = new FormGroup({
    input1: new FormControl(''),
    input2: new FormControl(''),
    input3: new FormControl({ value: '', disabled: true }),
    city: new FormControl('TB'),
    cb1: new FormControl(false),
    cb2: new FormControl(false),
    cb3: new FormControl(false)
  });

  isInvalid$!: Observable<boolean>;

  ngOnInit() {
    const controls = this.form.controls;

    combineLatest([
      controls.input1.valueChanges.pipe(startWith('')),
      controls.input2.valueChanges.pipe(startWith(''))
    ]).subscribe(([v1, v2]) => {
      const isStr = isNaN(Number(v2)) && v2 !== '';
      if (v1 && v2 && !isStr) {
        controls.input3.enable({ emitEvent: false });
      } else {
        controls.input3.disable({ emitEvent: false });
      }
    });

    combineLatest([
      controls.input2.valueChanges.pipe(startWith('')),
      controls.input3.valueChanges.pipe(startWith(''))
    ]).subscribe(([v2, v3]) => {
      if (v2 === '5' || v3 === '5') {
        controls.input1.setValue('5', { emitEvent: false });
      }
    });

     this.isInvalid$ = combineLatest([
      controls.cb1.valueChanges.pipe(startWith(false)),
      controls.cb2.valueChanges.pipe(startWith(false)),
      controls.cb3.valueChanges.pipe(startWith(false))
    ]).pipe(
      map(([c1, c2, c3]) => !(c1 && c2 && c3))
    );
  }

  onSubmit() {
    const selectedCity = this.form.get('city')?.value ?? '';
    const cb1Control = this.form.get('cb1');

    this.form.get('input3')?.setValue(selectedCity);

    if (selectedCity === 'TB') {
      cb1Control?.setValue(!cb1Control.value);
    }
  }
}