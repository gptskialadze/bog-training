import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   clients = 
  [
    { id: 1, name: "Name1", age: 20, resident: "Y" },
    { id: 3, name: "Name3", age: 40, resident: "N" },
    { id: 2, name: "Name2", age: 16, resident: "N" },
    { id: 5, name: "Name5", age: 25, resident: "Y" },
    { id: 4, name: "Name4", age: 17, resident: "N" },
   
  ]
}
