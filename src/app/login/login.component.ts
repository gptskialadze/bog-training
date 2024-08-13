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
  submited: boolean = false;
  ngOnInit(): void {
    this.initForm();
  }
  myForm!: FormGroup;
  login(e: any) {
    this.submited = true;
    e.preventDefault()
     this.router.navigate(['main'])
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
