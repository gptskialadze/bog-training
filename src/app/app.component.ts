import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  registerUser(username: string) {
      this.setUserInfo(username)
  }

  getUserInfo() {
    return localStorage.getItem("userInfo")
  }

  setUserInfo(username: string) {
    localStorage.setItem("userInfo", username)
  }
}
