import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private service: HttpService) {

  }

  ngOnInit(): void {

  }

  generateSession() {
    let md5 = Md5.hashStr("some text");
    localStorage.setItem("sessionId", md5);
    
  }

  getData() {
    this.service.getPosts().subscribe();
  }
}
