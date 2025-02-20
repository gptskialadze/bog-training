import { Component } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  client!: Client;
  cardNo!: string;
  img = "../assets/profile.avif";

  constructor() {
    this.client = new Client("Giorgi Ptskialadze", 33, "23242323", "GE34BG0000000","12213131");
    this.cardNo = this.client.getCardNo();
  }

  changeData() {
    this.client.clientAge = 34;
    this.img = "../assets/person.jpg";
  }
}
