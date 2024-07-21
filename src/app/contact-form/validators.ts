import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function firstNameStartsWithCapital(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value && value.length > 0 && value[0] !== value[0].toUpperCase()) {
      return { firstNameStartsWithCapital: true };
    }
    return null;
  };
}
