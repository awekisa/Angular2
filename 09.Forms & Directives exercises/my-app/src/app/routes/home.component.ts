import { Component, OnInit } from '@angular/core'
import { CarService } from '../cars/cars.service';
import data from '../data'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cars;

  constructor (private carsService: CarService) { }

  ngOnInit () {
    this.carsService
      .getCars()
      .then(cars => {
        cars.sort((c1, c2) => {
          return c2.date - c1.date;
        })
        this.cars = cars.slice(0, 6);
      })
  }
}