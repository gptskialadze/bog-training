import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = 'https://bog-angular-training-default-rtdb.asia-southeast1.firebasedatabase.app/lists.json';

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get(this.url);
  }
  addTodo(item: string, date: Date) {
    return this.http.post(this.url, { listItem: item, date: date });
  }
}
