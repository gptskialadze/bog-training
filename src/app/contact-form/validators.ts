import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const firstNameLastNameMatchValidator: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {
  const firstName = formGroup.get('firstName')?.value;
  const lastName = formGroup.get('lastName')?.value;
  return firstName === lastName ? { namesMatch: 'First Name and Last Name cannot be the same' } : null;
};

