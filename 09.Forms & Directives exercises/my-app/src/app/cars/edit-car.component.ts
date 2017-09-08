import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from './cars.service';

import { Car } from './car';

@Component({
  selector: 'home',
  templateUrl: './cars-form.component.html'
})
export class EditCarComponent {
  car;
  engines = [1.2, 1.6, 2.0, 4.0]
  id;

  constructor (private carService: CarService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  
  ngOnInit () {
      this.car = new Car(
      null,
      '',
      '',
      '',
      '',
      '',
      null,
      '',
      null,
      null);
    this.carService
      .getCarById(this.id)
      .then(car => {
        console.log(car)
        this.car = car;
      })
  }

  submitCar () {
    this.carService
      .editCar(this.id, this.car);
  }
}