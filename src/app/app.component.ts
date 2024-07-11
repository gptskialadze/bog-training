import { Component } from '@angular/core';
import { posts } from './posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clientPosts = posts
}
