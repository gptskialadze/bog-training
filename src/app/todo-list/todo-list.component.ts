import {Component, TemplateRef, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  constructor(private snackBar: MatSnackBar) { }

  @ViewChild('actionBarTemplate') actionBarTemplate!: TemplateRef<any>;

  itemList: string[] = [];

  addItem(input: HTMLInputElement) : void {
    console.log(input.value);
    if (!input.value || input.value == '') {
      this.showNotification('ინფუთის ველი ცარიელია');
    } else {
      this.itemList.push(input.value);
      input.value = '';
      this.showNotification('დაემატა ჩანაწერი');
    }
  }

  showNotification(message: string) : void {
    this.snackBar.open(message, 'Close', {
      duration: 5000 // Duration the snackbar will be displayed in milliseconds
    });
  }

}
