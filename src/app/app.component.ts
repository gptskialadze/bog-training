import {Component, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  isValid: boolean = false;
  isCopyDisabled: boolean = false;
  namesMatch: boolean = false;
  regForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.regForm = this.fb.group({
      firstName: ['First Name'],
      lastName: ['Last Name'],
      email: ['Email Address'],
      website: ['Website Name'],
      message: ['Write your message']
    });

    this.regForm.get('website')?.valueChanges.subscribe((value: string) => {
      if (value === 'www.myvideo.ge') {
        const newValue = value + 'my.ge';
        this.regForm.patchValue({ website: newValue });
      }
    });
  }

  copyAction(): void {
    this.regForm.setValue({
      firstName: 'Mariam',
      lastName: 'Mukhulishvili',
      email: 'lonelyTylenol961@gmail.com',
      website: 'bog.ge',
      message: 'Message Here'
    })
  }

  onSubmitCheck(): void {
    this.isValid = true;

    if (this.regForm.value.firstName?.trim() === '' ||
      this.regForm.value.lastName?.trim() === '') {
      this.isValid = false;
    }

    if (!(this.regForm.value.email?.includes('@'))) {
      this.isValid = false;
    }

    if (this.regForm.value.website?.length > 10) {
      this.isValid = false;
    }

    if (!(this.regForm.value.firstName?.at(0).toUpperCase() ===
      this.regForm.value.firstName?.at(0))) {
      alert("სახელი უნდა იწყებოდეს მაღალი რეგისტრით");
      this.isValid = false;
    }

    const currentDate = new Date().toLocaleString();
    this.regForm.patchValue({
      message: this.regForm.value.message + currentDate,
    })

    if(this.regForm.value.firstName?.length < 4) {
      this.isCopyDisabled = true;
    }

    if(this.regForm.value.firstName === this.regForm.value.lastName) {
      this.namesMatch = true;
    }
  }
}

interface IRegForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  website: FormControl<string>;
  message: FormControl<string>;
}
