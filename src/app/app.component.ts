import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';

  contactFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      websiteName: ['', Validators.maxLength(10)],
      message: ['']
    });

    this.contactFormGroup.get("websiteName")?.valueChanges.subscribe(value => {
      this.checkAndReplaceWebsiteName(value);
    });
  }

  onSubmit() {

    if (!this.startsWithUppercase(this.contactFormGroup.get("firstName")?.value)) {
      alert("სახელი უნდა იწყებოდეს მაღალი რეგისტრით");
    }

    this.contactFormGroup.get("message")?.setValue(this.contactFormGroup.get("message")?.value + " " + this.getCurrentDay());

    if (this.contactFormGroup.valid) {
      console.log(this.contactFormGroup.controls);
    } else {
      console.log("form invalid");
    }
  }

  checkAndReplaceWebsiteName(value: string) : void {
    if (value && value === 'myvideo.ge') {
      this.contactFormGroup.get("websiteName")?.setValue(this.contactFormGroup.get("websiteName")?.value + " my.ge");
    }
  }

  getCurrentDay() : string {
    return String(new Date().getDate()).padStart(2, '0');
  }

  startsWithUppercase(value: string): boolean {
    return !!value && value.length > 0 && value[0] === value[0].toUpperCase();
  }

}
