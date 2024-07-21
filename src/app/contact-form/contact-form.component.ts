import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IContactForm} from './contact-form';
import {firstNameLastNameMatchValidator} from './validators';
import {ERROR_MESSAGES} from './error-messages';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm: FormGroup<IContactForm>;
  disableCopyButton = false;
  errors: string[] = [];

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
        nonNullable: true,
        validators: [Validators.required]
      }),
      message: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      })
    }, {
      validators: [firstNameLastNameMatchValidator]
    });
  }

  onCopy() {
    this.contactForm.setValue({
      firstName: 'testFirstName',
      lastName: 'testLastName',
      email: 'test@test.com',
      website: 'test.com',
      message: 'This is a test message.'
    });
  }

  onSubmit() {
    this.errors = [];

    // Set default website if email is empty
    if (!this.contactForm.value.email) {
      this.contactForm.get('website')?.setValue('www.myWebsite.com', {emitEvent: false});
    }

    // Check form validity
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Add today's date to the message
      const currentMessage = this.contactForm.get('message')?.value;
      const updatedMessage = `${currentMessage} - ${new Date().toLocaleDateString()}`;
      formData.message = updatedMessage
      this.contactForm.get('message')?.setValue(updatedMessage);

      this.disableCopyButton = this.contactForm.controls.firstName.value.length < 4;

      console.log(formData);
    } else {
      // Collect validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        const controlErrors = this.contactForm.get(key)?.errors;
        if (controlErrors) {
          Object.keys(controlErrors).forEach(errorKey => {
            const errorMessage = ERROR_MESSAGES[errorKey];
            if (errorMessage) {
              this.errors.push(`${key}: ${errorMessage}`);
            }
          });
        }
      });

      const formErrors = this.contactForm.errors;
      if (formErrors) {
        Object.keys(formErrors).forEach(errorKey => {
          const errorMessage = ERROR_MESSAGES[errorKey];
          if (errorMessage) {
            this.errors.push(errorMessage);
          }
        });
      }
    }
  }
}
