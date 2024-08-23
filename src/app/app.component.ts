import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   constructor(private service: HttpServiceService) {

   }

   ngOnInit(): void {
     this.service.getPosts().subscribe();
     this.service.addPosts().subscribe();
   }
}
