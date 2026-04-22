import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { combineLatest, debounceTime, distinctUntilChanged, forkJoin, from, Observable, of, startWith, zip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;
  array1$!: Observable<any>;
  array2$!: Observable<any>;


  ngOnInit() {
    this.array1$ = from(["A", "B", "C"]);
    this.array2$ = from([1, 2, 3]);

    forkJoin(this.array1$, this.array2$)
    .subscribe(e=> console.log(e)
    )

    this.myForm = new FormGroup({
      input1: new FormControl("", [fobidenName()]),
      input2: new FormControl(""),
    }, {
      validators: [composeNames()]
    });

    this.myForm.get("input1")?.valueChanges
    .pipe(debounceTime(300), distinctUntilChanged(), startWith("gioo"))
    .subscribe(e => console.log(e)
    );



    zip(
      [this.myForm.get("input1")!.valueChanges,
       this.myForm.get("input2")!.valueChanges,
      ]
    ).pipe(
      debounceTime(800)
    )
    .subscribe(e => console.log(e[0]))
    
  }



  logForm() {
    console.log(this.myForm.valid);
    
  }
}


export function fobidenName(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
   const forbidenList =  ["test", "main"];
   if (forbidenList.includes(control.value)) {
    return {forbidenName: control.value}
   } else {
    return null;
   }
  }
}

export function composeNames(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const input1 = group.get("input1")?.value;
    const input2 = group.get("input2")?.value;

    return input1 !== input2 ? {composeName: true} : null
  }
}