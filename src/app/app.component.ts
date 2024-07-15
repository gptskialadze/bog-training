// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'myapp';
  isSwitcherOn : boolean = true;
  maleImgUrl : string = '../assets/person.jpg';
  femaleImgUrl : string = '../assets/woman.jpg';
  currentImgUrl : string = this.maleImgUrl;

  onSwitchChanged() {
    this.isSwitcherOn  = !this.isSwitcherOn;

    if(this.isSwitcherOn) {
      this.currentImgUrl = this.maleImgUrl;
    } else {
      this.currentImgUrl = this.femaleImgUrl;
    }
  }
  protected readonly onmouseout = onmouseout;
}
