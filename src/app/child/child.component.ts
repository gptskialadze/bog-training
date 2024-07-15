import {Component, Input, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import { posts } from './posts';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  {
  clientPosts = posts;

  @Input() filter!: string;

  ngOnChanges(changes: SimpleChange) {
    if (this.filter && this.filter != '') {
      this.clientPosts = posts.filter((e) => e.title.includes(this.filter));
    } else {
      this.clientPosts = posts;
    }
  }

}
