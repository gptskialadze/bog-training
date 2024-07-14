import {Component} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  items: string[] = [];

  constructor(private snackBar: MatSnackBar) {
  }

  addItem(value: string) {
    if (value) {
      this.items.push(value);
      this.snackBar.open('New todo item has been added', 'Close', {
        duration: 300000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    }
  }
}
