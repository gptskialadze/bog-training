import { Component } from '@angular/core';

export interface CardInfo {
  name: string;
  website: string;
  image: string;
  category: string;
  workHrs: number;
  country: string;
  email: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  public user: CardInfo = {
    name: 'John Doe',
    website: 'www.example.com',
    image: 'assets/123img.png',
    category: 'Web Development',
    workHrs: 58,
    country: 'Italy',
    email: 'demo@mail.com'
  };
}