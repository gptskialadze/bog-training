import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';

  websiteRegForm: FormGroup<WebsiteRegInfo> = new FormGroup<WebsiteRegInfo>({
    firstName: new FormControl<string>('', [Validators.required]),
    lastName: new FormControl<string>('', {nonNullable: true}),
    email: new FormControl<string | null>(null, [Validators.email]),
    website: new FormControl<string | null>(null, [Validators.maxLength(10)],    ),
    message: new FormControl<string>(''),
  });

  ngOnInit() {
    console.log('ngOnInit');
    (this.websiteRegForm.get('website') as FormControl<string | null>).registerOnChange(this.onWebsiteChange.bind(this));
  }
  submit() {
    console.log('checking form validity');

    if ( !/[A-Z]/.test(<string>this.websiteRegForm.value.firstName?.charAt(0))) {
      alert("სახელი უნდა იწყებოდეს მაღალი რეგისტრით");
    }

    this.websiteRegForm.value.message = new Date() + ': ' + this.websiteRegForm.value.message;

    console.log(this.websiteRegForm.value);
  }

  onWebsiteChange(newValue: any) {
    console.log('website changed ' + newValue);
    if (this.websiteRegForm.value.website !== null && this.websiteRegForm.value.website !== undefined
      && this.websiteRegForm.value.website === 'myvideo.ge') {

      this.websiteRegForm.value.website = this.websiteRegForm.value.website + ', my.ge';
    }
  }
}

export interface WebsiteRegInfo {
  firstName: FormControl<string | null>;
  lastName: FormControl<string>;
  email: FormControl<string | null>;
  website: FormControl<string | null>;
  message: FormControl<string | null>;
}
