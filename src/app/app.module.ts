import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MySelectComponent } from './my-select/my-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyCheckboxComponent } from './my-checkbox/my-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    MySelectComponent,
    MyCheckboxComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
