import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lists: any = [];
  constructor(private service: AppServiceService) {

  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
     this.service.getData().subscribe((data: any) => {
      this.lists = Object.values(data)
     })
  }
  addData(listItem: string) {
   this.service.addData({
    listItem: listItem,
    date: new Date().toLocaleString()
   }).subscribe(() => this.getData())
  }
}
