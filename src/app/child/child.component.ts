import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {posts} from './posts';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {
  clientPosts = posts;

  @Input() title: string = '';
  ngOnChanges(filterWith: SimpleChanges): void {
    const filterValue :string = filterWith['title'].currentValue;
    this.clientPosts = posts.filter(post => post.title.includes(filterValue));
  }
}

