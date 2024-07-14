import { Component } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-card-body-title',
  templateUrl: './card-body-title.component.html',
  styleUrls: ['./card-body-title.component.scss']
})
export class CardBodyTitleComponent extends AppComponent{
  personName: string = 'სახელი';

  switchName() {
    if (this.isSwitcherOn) {
      this.personName = 'ბატონი';
    } else {
      this.personName = 'ქალბატონი';
    }
    console.log(this.isSwitcherOn)
  }

  resetName() {
    this.personName = 'სახელი';
  }

}
