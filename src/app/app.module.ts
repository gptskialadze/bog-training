import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsGuard } from './news/news,guard';

const routes: Routes = [
  {
    path: "home",
    loadChildren: ()=>  import('./home/home.module').then(e => e.HomeModule)
  },
  {
    path: "home/:id",
    loadChildren: ()=>  import('./home/home.module').then(e => e.HomeModule)
  },
  {
    path: "about",
    loadChildren: ()=>  import('./about/about.module').then(e => e.AboutModule)
  },
  {
    path: "news",
    loadChildren: ()=>  import('./news/news.module').then(e => e.NewsModule),
    canActivate: [NewsGuard]
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
