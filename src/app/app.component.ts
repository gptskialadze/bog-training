import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';

  changePhoto(event: Event) {
    console.log((event.target as HTMLInputElement).checked)
  }
}
