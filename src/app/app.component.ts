import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any[] = [];
  inputValue: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    console.log('1. component initialized, Call getData');
    this.getData();
  }

  getData() {
    console.log('2. Call getData');
    this.todoService.getTodos().subscribe({
      next: (e: any) => {
        if (e) {
          console.log('3. Data received from service:', e);
          this.data = Object.values(e);
          console.log('4. Data after transformation:', this.data);
        }
      },
      error: (err: any) => {
        console.error('Error occurred:', err);
      }
    });
  }

  onAdd(itemInput: any) {
    console.log('5. onAdd called with value:', itemInput.value);
    if (itemInput.value) {
      this.todoService.addTodo(itemInput.value, new Date()).subscribe({
        next: () => {
          console.log('6. Data successfully added to Firebase');
          itemInput.value = ''; 
          this.getData(); 
        },
        error: (err: any) => {
          console.error('Add error:', err);
        }
      });
    }
  }
}