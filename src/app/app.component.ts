import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { cities } from './cities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   cities = cities

   ngOnInit() {
    this.initForm()
   }

   myForm!: FormGroup;
   


   initForm() {
    this.myForm = new FormGroup({
      city: new FormControl()
    })
   }
}
