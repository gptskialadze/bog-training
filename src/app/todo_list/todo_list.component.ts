import {Component} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo_list.component.html',
  styleUrls: ['./todo_list.component.scss']
})
export class TodoListComponent {
  todoList: string [] = [];

  addItem(item: string) {
    this.todoList.push(item);
    window.alert("მოხდა ჩანაწერის ცვლილება");
  }

  protected readonly String = String;
}
