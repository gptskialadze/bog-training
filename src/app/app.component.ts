import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {cities} from './cities';
import {combineLatest, merge} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showButton: boolean = false;

  ngOnInit() {
    this.initForm();
    this.setStreet()
    this.checkGenders();
  }

  myForm!: FormGroup;

  setData() {
    console.log('data now: ' + this.myForm.get("male")?.value);

    this.myForm.get("city")?.setValue("TB")
    this.myForm.get('male')?.setValue(true);

    console.log('data now: ' + this.myForm.get("male")?.value);
  }

  setStreet() {
    this.myForm.get("city")?.valueChanges
      .subscribe((value: string) => {
        let street = cities.find((item: any) => item.value == value);
        this.myForm.get("street")?.setValue(street?.street);
      })
  }

  checkGenders() {

    // @ts-ignore
    merge(this.myForm.get('male')?.valueChanges, this.myForm.get('female')?.valueChanges)
      .subscribe((res) => {
        console.log('in subscribe' + JSON.stringify(res));
        if (this.myForm.get('male')?.value || this.myForm.get('female')?.value) {
          this.showButton = true
        } else {
          this.showButton = false
        }
      });
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
