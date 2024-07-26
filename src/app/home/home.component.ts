import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list = [
    {
      id: 1,
      city: 'Tbilisi',
      street: 'street1 Tbilisi',
      name: 'name1 Tbilisi'
    },
      {
      id: 2,
      city: 'Tbilisi',
      street: 'street2 Tbilisi',
      name: 'name2 Tbilisi'
    },
      {
      id: 3,
      city: 'Tbilisi',
      street: 'street3 Tbilisi',
      name: 'name3 Tbilisi'
    },
      {
      id: 4,
      city: 'Qutaisi',
      street: 'street1 Qutaisi',
      name: 'name1 Qutaisi'
    },
      {
      id: 5,
      city: 'Qutaisi',
      street: 'street2 Qutaisi',
      name: 'name2 Qutaisi'
    },
      {
      id: 6,
      city: 'Qutaisi',
      street: 'street3 Qutaisi',
      name: 'name3 Qutaisi'
    },
        {
      id: 7,
      city: 'Batumi',
      street: 'street1 Batumi',
      name: 'name1 Batumi'
    },
      {
      id: 8,
      city: 'Batumi',
      street: 'street2 Batumi',
      name: 'name2 Batumi'
    },
      {
      id: 9,
      city: 'Batumi',
      street: 'street3 Batumi',
      name: 'name3 Batumi'
    }
  ];

  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe((param: any) => {
      this.list = param.id ? this.list.filter((item: any) => item.id == param['id'] 
      || item.city.toLowerCase().includes(param['id']) 
      || item.street.toLowerCase().includes(param['id'])
      || item.name.toLowerCase().includes(param['id'])) 
      : this.list
    })

    this.actRoute.queryParams.subscribe((param: any) => {
      this.list = param.id ? this.list.filter((item: any) => item.id == param['id'] 
      || item.city.toLowerCase().includes(param['id']) 
      || item.street.toLowerCase().includes(param['id'])
      || item.name.toLowerCase().includes(param['id'])) 
      : this.list
    })
    
  }
  
}
