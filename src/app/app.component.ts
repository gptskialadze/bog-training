import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  isMale:boolean=true;
  personName:string="Aleksander";
  maleImg: string = "assets/person.jpg";
  femaleImg: string = "assets/woman-Pic.avif";
  toggleGender() {
    this.isMale = !this.isMale;
  }
changePhoto(event: any) {
    this.isMale = !this.isMale;
    console.log("Toggle status:", event.target.checked);
  }
}