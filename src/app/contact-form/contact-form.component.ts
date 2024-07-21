import {Component, OnInit} from '@angular/core';
import {IContactForm} from "./contact-form";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {firstNameStartsWithCapital} from "./validators";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit{
  contactForm: FormGroup<IContactForm>;
  errorMessage: string = '';
  isCopyButtonDisabled: boolean = false;

  constructor() {
    this.contactForm = new FormGroup<IContactForm>({
      firstName: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      lastName: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      email: new FormControl<string>(''),
      website: new FormControl<string>('', {
        validators: [Validators.required, Validators.maxLength(10)]
      }),
      message: new FormControl<string|null>('')
    });
  }

  onContactFormSubmit() {
    if (this.contactForm.invalid) {
      console.log('Form not Submitted!', this.contactForm.value);
    }
    else if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      const firstNameControl = this.contactForm.get('firstName');
      if (firstNameControl?.hasError('firstNameStartsWithCapital')) {
        console.log('სახელი უნდა იწყებოდეს მაღალი რეგისტრით');
      }

      if (this.contactForm.value.message && this.contactForm.value.message.length > 0) {
        const today = new Date().toLocaleDateString();
        this.contactForm.get('message')?.setValue(this.contactForm.value.message + ' ' + today);
      }

      if (this.contactForm.value.firstName!.length < 4) {
        console.log('სახელი უნდა იყოს 4 სიმბოლოზე მეტი.');
        this.isCopyButtonDisabled = true;
      } else {
        this.isCopyButtonDisabled = false;
      }

      if (this.contactForm.value.firstName == this.contactForm.value.lastName) {
        console.log('სახელი და გვარის მნიშვნელობები ერთმანეთს არ უნდა ემთხვეოდეს.');
        this.errorMessage = 'სახელი და გვარის მნიშვნელობები ერთმანეთს არ უნდა ემთხვეოდეს.'
      }

      if (!this.contactForm.value.email) {
        this.contactForm.get('website')?.setValue('node.com', {emitEvent: false});
      }

    }
  }

  ngOnInit(): void {
  }

  onCopyClick() {
    console.log('Copy button clicked!');
    this.contactForm.setValue(
      {
        firstName: 'Sopo',
        lastName: 'Tsabadze',
        email: 's.tsabadze@bog.ge',
        website: 'sopo.com',
        message: 'Hello, I am Sopo Tsabadze!'
      }
    )
  }
}
