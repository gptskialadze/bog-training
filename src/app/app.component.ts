import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';

  personImage = "../assets/person.jpg";

  gender = "male";

  name = "მიხო";

  genderChange(event: Event) : void {
    const inputElement = event.target as HTMLInputElement;
    let checked = inputElement.checked;
    if (checked) {
      this.personImage = "../assets/person.jpg";
      this.gender = "male";
      this.name = "მიხო";
    } else {
      this.personImage = "../assets/woman.jpg";
      this.gender = "female";
      this.name = "მარო";
    }
  }

}
