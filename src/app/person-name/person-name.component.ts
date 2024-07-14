import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-person-name',
  templateUrl: './person-name.component.html',
  styleUrls: ['./person-name.component.scss']
})
export class PersonNameComponent {

  @Input() name!: string;

  @Input() gender!: string;

  getTitle() : string {
    if (this.gender == "female") {
      return "ქალბატონი";
    } else if(this.gender == "male") {
      return "ბატონი";
    } else {
      return "they/them";
    }
  }

}
