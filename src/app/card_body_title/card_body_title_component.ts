import {Component, Input} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-card-body-title',
  templateUrl: './card_body_title.component.html',
  styleUrls: ['./card_body_title.scss']
})
export class CardBodyTitleComponent {
  personName: string = 'სახელი';

  @Input()
  isSwitcherOn: boolean | null = null;

  switchName() {
    if (this.isSwitcherOn) {
      this.personName = 'ბატონი';
    } else {
      this.personName = 'ქალბატონი';
    }
  }

  resetName() {
    this.personName = 'სახელი';
  }

}
