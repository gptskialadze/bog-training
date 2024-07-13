import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cities = [
    "Tbilisi", 'Qutaisi', 'Batumi', 'Poti'
  ]

  currentCity: string = 'Tbilisi';
  currentPhoto: string = '../assets/person.jpg';
  termsAccepted = false;

  cityChanged(event: Event) : void {
    const selectElement = event.target as HTMLSelectElement;
    console.log('Selected city:', selectElement.value);
    this.currentCity = selectElement.value;
  }

  changePhoto() : void {
    const baseAddr = '../assets/randomPhotos/';

    let randomNumber = this.getRandomInt(5);
    while (this.currentPhoto.includes('' + randomNumber)) {
      randomNumber = this.getRandomInt(5);
    }

    this.currentPhoto = baseAddr + 'karsh' + randomNumber + '.jpg';

  }

  getRandomInt(max: number) : number {
    return Math.ceil(Math.random() * max);
  }

  termsCheckboxChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.termsAccepted = checkbox.checked;
    console.log('Terms accepted:', this.termsAccepted);
  }

  registerClicked() {
    console.log("registerClicked");
  }

}
