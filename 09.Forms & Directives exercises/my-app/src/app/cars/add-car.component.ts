import { Component, OnInit } from '@angular/core';
import { CarService } from './cars.service';

import { Car } from './car';

@Component({
  selector: 'home',
  templateUrl: './cars-form.component.html'
})
export class AddCarComponent {
  car: Car;
  engines = [1.2, 1.6, 2.0, 4.0]

  constructor (private carService: CarService) { }

  ngOnInit () {
    this.car = new Car(
      null,
      'car1',
      'model1',
      'https://static.pexels.com/photos/120049/pexels-photo-120049.jpeg',
      'gosho',
      'cool car',
      10000,
      '',
      null,
      10000);
  }

  submitCar () {
    this.carService
      .addCar(this.car);
  }
}