import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
   {
    path: "form",
    component: FormComponent
   },
   {
    path: "form/:id",
    component: FormComponent
   }
]
@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
