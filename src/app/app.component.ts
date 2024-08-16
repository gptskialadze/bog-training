import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { cities } from './cities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   

   ngOnInit() {
    this.initForm();
    this.setStreet();
   }

   myForm!: FormGroup;

   setData() {
    this.myForm.get("city")?.setValue("TB")
   }
   
  setStreet() {
    this.myForm.get("city")?.valueChanges
    .subscribe((value: string) => {
       let street = cities.find((item: any) => item.value == value);
       this.myForm.get("street")?.setValue(street?.street)
    })
  }

   initForm() {
    this.myForm = new FormGroup({
      city: new FormControl(""),
      street: new FormControl("")
    })
   }
}
