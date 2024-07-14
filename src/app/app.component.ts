import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'myapp';
  isSwitcherOn: boolean = true;
  currentPicture: string = '../assets/male.jpg';

  switchPerson() {
    this.isSwitcherOn = !this.isSwitcherOn;
    this.changePicture();
  }

  changePicture() {
    if (this.isSwitcherOn) {
      this.currentPicture = '../assets/male.jpg';
    } else {
      this.currentPicture = '../assets/female.jfif';
    }
  }

  protected readonly onmouseout = onmouseout;
}
