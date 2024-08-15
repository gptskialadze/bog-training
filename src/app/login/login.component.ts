import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private actRoute: ActivatedRoute) {}
  submited: boolean = false;
  ngOnInit(): void {
    this.initForm();
    this.actRoute.data.subscribe((e: any) => {
      this.myForm.patchValue(e.data);
      if (this.myForm.valid) {
        this.submited = true;
      } else {
        this.submited = false;
      }
    })
    
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
