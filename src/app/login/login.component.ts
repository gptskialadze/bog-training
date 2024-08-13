import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) {}
  login(usename: string, password: string) {
    localStorage.setItem("userInfo", JSON.stringify({
      username: usename,
      password: password
    }))
     this.router.navigate(['main'])
  }
}
