import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cities: string [] = [
    "Tbilisi", 'Qutaisi', 'Batumi', 'Poti'
  ]

  images: string [] = [
    "person.jpg", "second.jpg", "third.jfif"
  ]

  selectedCity: string = "default value";
  agreeOnTerms: boolean = false;
  currentImageId: number = 0;

  getImageUrl() {
    const image = this.images[this.currentImageId]
    return "../assets/" + image
  }

  onCitiesDropdownChange(event: any) {
    this.selectedCity = event.target.value;
    console.log('selected city is: ' + this.selectedCity);
  }

  onAgreeOnTerms() {
    this.agreeOnTerms = !this.agreeOnTerms;

    if (this.agreeOnTerms) {
      console.log('you agreed on terms, you can Register now!')
    }
  }

  changePicture() {
    this.currentImageId = (this.currentImageId + 1) % this.images.length
  }

  finish() {
    window.alert('you finished !')
  }
}
