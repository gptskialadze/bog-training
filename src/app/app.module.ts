import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http"
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginGuard } from './login/login.guard';
import { LoginResolver } from './login/login.resolver';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canDeactivate: [LoginGuard],
    resolve: 
      {
        data: LoginResolver
      }
    
  },
  {
    path: 'main',
    component: MainComponent,
   
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
