import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CardBodyTitleComponent} from "./card_body_title/card_body_title_component";
import {TodoListComponent} from "./todo_list/todo_list.component";

@NgModule({
  declarations: [
    AppComponent,
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
