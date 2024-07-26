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
  navigateToHome() {
    this.router.navigate(['home'])
  }

  navigateToHomeId() {
    const id = 12;
    this.router.navigate(['home', id])
  }

  navigateToHomeQuery() {
    const query = {
      id: 12,
      name: 'test'
    }
    this.router.navigate(['home'], {
      queryParams: query
    })
  }
}
