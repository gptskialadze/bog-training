import { Component, Input } from '@angular/core';
import { posts } from './posts';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  clientPosts = posts;

}
