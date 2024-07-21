import {FormControl} from '@angular/forms';

export interface IContactForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string | null>;
  website: FormControl<string|null>;
  message: FormControl<string|null>;
}
