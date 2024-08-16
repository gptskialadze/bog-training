import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { cities } from './cities';
import { concat, forkJoin, merge, zip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   showButton: boolean = false;

   ngOnInit() {
    this.initForm();
    this.setStreet();
    this.changeCheckbox()
   }

   myForm!: FormGroup;

   setData() {
    this.myForm.get("city")?.setValue("TB")
   }
   
  setStreet() {
    this.myForm.get("city")?.valueChanges
    .subscribe((value: string) => {
       let street = cities.find((item: any) => item.value == value);
       this.myForm.get("street")?.setValue(street?.street);
       this.myForm.get("male")?.setValue(true)
    })
  }

  changeCheckbox() {
    let male: any = this.myForm.get("male")?.valueChanges;
    let female: any = this.myForm.get("female")?.valueChanges
    merge(male, female)
    .subscribe((res) => {
      if (this.myForm.get("male")?.value || this.myForm.get("female")?.value) {
        this.showButton = true
      } else {
        this.showButton = false
      }
    })
  }

   initForm() {
    this.myForm = new FormGroup({
      city: new FormControl(""),
      street: new FormControl(""),
      male: new FormControl(""),
      female: new FormControl("")
    })
   }
}
