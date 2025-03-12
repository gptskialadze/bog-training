import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Users } from '../users';
export interface Parm {
  id: string
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent {
  constructor(private route: ActivatedRoute) {

  }

  users = Users;
  user: any;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const prm  = params as Parm;
      this.user = this.users.find((elem: any) => elem.id == prm.id)
    })
  }
}
