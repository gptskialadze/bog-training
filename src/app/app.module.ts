import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {AppComponent} from './app.component';
import {SwitcherComponent} from './switcher/switcher.component';
import {FormsModule} from "@angular/forms";
import {CardTitleComponent} from './card-title/card-title.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    SwitcherComponent,
    CardTitleComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
