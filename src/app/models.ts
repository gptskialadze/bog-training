import {FormControl} from "@angular/forms";

export interface IRegForm {
  selectedCity: FormControl<string|null>;
  selectedStreet: FormControl<string|null>;
  inputName: FormControl<string|null>;
}
