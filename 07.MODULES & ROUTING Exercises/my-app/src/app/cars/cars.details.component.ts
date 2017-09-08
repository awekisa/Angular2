import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import data from '../data';

@Component({
  selector: 'home',
  templateUrl: './cars.details.component.html',
  styleUrls: ['./cars.details.component.css']
})
export class CarDetailsComponent {
  car;
  id;
  constructor (private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit () {
    data
      .getCarById(this.id)
      .then(car => {
        this.car = car;
      })
  }
}