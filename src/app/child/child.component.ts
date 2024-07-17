import {Component, Input, SimpleChange} from '@angular/core';
import { posts } from './posts';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  clientPosts = posts;

  @Input() title: string = '';

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {

    const filterValue = changes['title'].currentValue;

    console.log('change value: ' + filterValue);

    this.clientPosts = posts.filter(post => post.title.includes(filterValue));

  }
}
