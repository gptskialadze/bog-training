import {Component} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todoList: string [] = [];

  addItem(item: string) {
    this.todoList.push(item);
    window.alert("მოხდა ჩანაწერისს ცვლილება");
  }

  protected readonly String = String;
}
