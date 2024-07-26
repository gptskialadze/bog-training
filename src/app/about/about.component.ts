import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private router: Router) {

  }
  navigateToHomeWithId(txt: string) {
    this.router.navigate(['home', txt])
  }

  navigateToHomeWithQuery(txt: string) {
    this.router.navigate(['home'], {
      queryParams: {
        id: txt
      }
    })
  }
}
