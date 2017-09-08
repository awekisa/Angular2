import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'car-form',
  templateUrl: './car-form.component.html'
})
export class CarFormComponent {
  engines = [1.2, 1.6, 2.0, 4.0]
  car: Car;
  number: 123

  constructor () {
    this.clearCar();
  }

  clearCar () {
    this.car = new Car('', '', 0)
  }

  submitCar () {
    console.log(this.car)
  }


}