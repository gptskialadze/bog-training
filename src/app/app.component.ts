import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { combineLatest, concatMap, debounceTime, delay, distinctUntilChanged, first, forkJoin, from, interval, last, map, mergeMap, Observable, of, startWith, switchMap, timer, zip } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  appService = inject(AppService);
  users: any = [];

  ngOnInit(): void {
    this.appService.getData(1)
    .subscribe((e: any) => this.users = e);
    this.loadUsers();
  }

  loadUsers() {
    this.appService.subject
    .subscribe(() => {
      this.appService.getData(Math.round(Math.random() *  10))
      .subscribe((e: any) => this.users = e);
    })
  }

}