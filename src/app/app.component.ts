import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  constructor(private service: HttpService) {
  //   let md5 = Md5.hashStr("some text");
  }
}
