import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SwitcherComponent} from './switcher/switcher.component';
import {FormsModule} from "@angular/forms";
import {CardTitleComponent} from './card-title/card-title.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitcherComponent,
    CardTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
