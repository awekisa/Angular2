import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from './car';

import { CarService } from './cars.service';

@Component({
  selector: 'home',
  templateUrl: './cars.details.component.html',
  styleUrls: ['./cars.details.component.css']
})
export class CarDetailsComponent {
  car;
  comment;
  id: number;
  constructor (private route: ActivatedRoute, private carService: CarService) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit () {
    this.carService
      .getCarById(this.id)
      .then(car => {
        this.car = car
      })
  }

  editCar () {
    this.carService
      .editCar(this.id, this.car)
      .then(car => {
        this.car = car;
      })
  }

  postComment () {
    this.carService
      .postComment (this.car.id, this.comment)
    console.log(this.comment)
  }
}