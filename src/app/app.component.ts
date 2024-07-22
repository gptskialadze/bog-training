import { Component } from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';

  firstNameLastnameComparatorValidator: ValidatorFn = (control) =>{

    if (control.get('firstName')?.value === control.get('lastName')?.value) {
      return {firstNameLastnameSame: true};
    }
    return null;
  }

  myEmailValidator: ValidatorFn = (control) => {


    if (control.value === null) {
      return null;
    }
    if (control.value === '') {
      return null;
    }

    console.log('in my email validator: ' + control.value.includes('@'));

    if (!control.value.includes('.')) {
      return {noDot: true};
    }
    if (!control.value.includes('@')) {
      return {noAt: true};
    }

    return null;
  }

  websiteRegForm: FormGroup<WebsiteRegInfo> = new FormGroup<WebsiteRegInfo>({
    firstName: new FormControl<string>('', [Validators.required, this.firstNameLastnameComparatorValidator]),
    lastName: new FormControl<string>('', {nonNullable: true,
      validators: [Validators.required, Validators.minLength(10), this.firstNameLastnameComparatorValidator]}),
    email: new FormControl<string | null>(null, [this.myEmailValidator, Validators.minLength(5), Validators.required]),
    password: new FormControl<string | null>(null, [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl<string>('', Validators.required),
  });

  get lastName() {
    return this.websiteRegForm.controls.lastName;
  }

  get firstName() {
    return this.websiteRegForm.controls.firstName;
  }

  get password() {
    return this.websiteRegForm.controls.password;
  }

  get email() {
    return this.websiteRegForm.controls.password;
  }

  get confirmPassword() {
    return this.websiteRegForm.controls.confirmPassword;
  }

  // ngOnInit() {
  //   console.log('ngOnInit');
  //   (this.websiteRegForm.controls.website as FormControl<string | null>).registerOnChange(this.onWebsiteChange.bind(this));
  // }
  submit() {
    console.log('checking form validity');

    if ( !/[A-Z]/.test(<string>this.websiteRegForm.value.firstName?.charAt(0))) {
      alert("სახელი უნდა იწყებოდეს მაღალი რეგისტრით");
    }
    console.log(this.websiteRegForm.value);
  }

  // onWebsiteChange(newValue: any) {
  //   console.log('website changed ' + newValue);
  //   if (this.websiteRegForm.value.website !== null && this.websiteRegForm.value.website !== undefined
  //     && this.websiteRegForm.value.website === 'myvideo.ge') {
  //
  //     this.websiteRegForm.value.website = this.websiteRegForm.value.website + ', my.ge';
  //   }
  // }
  protected readonly JSON = JSON;
}

export interface WebsiteRegInfo {
  firstName: FormControl<string | null>;
  lastName: FormControl<string>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}
