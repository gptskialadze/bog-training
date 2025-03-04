import { Component } from '@angular/core';
import { menues } from './menues';
import { cards } from './cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menues = menues;
  cards = cards;
  items: any = [];
  isShow: boolean = false;

  showCart() {
    this.isShow = !this.isShow
  }

  addCart(card: any) {
    this.items.push(card)
  }

  removeItem(id: number) {
    this.items.splice(this.items.findIndex((e: any) => e.id == id), 1)
  }
}
