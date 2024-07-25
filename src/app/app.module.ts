import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
const route: Routes = [
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'news',
    component: NewsComponent,
  },
  {
    path:'about',
    component: AboutComponent,
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
