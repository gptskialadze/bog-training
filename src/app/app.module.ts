import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardBodyTitleComponent } from './card-body-title/card-body-title.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
    declarations: [
        AppComponent,
        CardBodyTitleComponent,
        CardBodyTitleComponent,
        TodoListComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
