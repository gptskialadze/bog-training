import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {posts} from './posts';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {
  @Input() query: string = '';
  clientPosts = posts;
  filteredPosts = posts;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['query']) {
      this.filterPosts();
    }
  }

  private filterPosts(): void {
    this.filteredPosts = this.clientPosts.filter(post =>
      post.title.toLowerCase().includes(this.query.toLowerCase())
    );
  }
}
