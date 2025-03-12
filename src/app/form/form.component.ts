import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Users } from '../users';

export interface Parm {
  id: string
}

export interface QueryParm {
  id: string,
  status: string,
  userName: string,
  email: string
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
  user: any = {};

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const prm  = params as Parm;
      if (Object.keys(prm).length) {
        this.user = this.users.find((elem: any) => elem.id == prm.id);
        // console.log(this.user);
      }
    });

    this.route.queryParamMap.subscribe((params: ParamMap) => {
      if(params.keys.length) {
        const queryPrm: QueryParm = {
          id: params.get("id") || '',
          status: params.get("status") || '',
          userName: params.get('username') || '',
          email: params.get('email') || ''
        }
        this.user = queryPrm
      }
    })
  }
}
