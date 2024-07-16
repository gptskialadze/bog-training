import {Component, Input, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import { posts } from './posts';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  clientPosts = posts;

  @Input() inputValue!: string;

  ngOnChanges(changes: SimpleChange) {
    this.clientPosts = [];

    if (this.inputValue.trim() !== '') {
      for (let i = 0; i < posts.length; i++) {
        if (posts[i].title.toLowerCase().includes(this.inputValue.toLowerCase().trim())) {
          this.clientPosts.push(posts[i]);
        }
      }
    } else {
      this.clientPosts = posts.slice();
    }
  }

}
