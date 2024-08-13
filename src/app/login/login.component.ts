import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }
  myForm!: FormGroup;
  login(e: any) {
    e.preventDefault()
  }

  initForm() {
    this.myForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl(""),
      street: new FormControl(""),
      email: new FormControl("", Validators.required)
    })
  }

}
