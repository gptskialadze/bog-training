import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyPipePipe } from './my-pipe.pipe';
import { TextTransformerPipe } from './text-transformer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyPipePipe,
    TextTransformerPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
