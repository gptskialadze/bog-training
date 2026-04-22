import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home';
import { RouterModule, Routes } from '@angular/router';


const route: Routes = [
  {
    path: '',
    component: Home
  }
]
@NgModule({
  declarations: [Home],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports: [Home]
})
export class HomeModule { }
