import { Component, OnInit } from '@angular/core';
import { CarService } from './cars.service';
import { Car } from './car';

@Component({
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  page: 1;
  cars: Car[];
  sortByMakeAscending = false;

  constructor (private carsService: CarService) { }

  ngOnInit () {
    this.carsService
      .getCars()
      .then(cars => {
        this.cars = cars;
      })
  }

  sortByMake () {
    this.carsService
      .getCars()
      .then(cars => {
        if (this.sortByMakeAscending) {
          cars.sort((c1, c2) => {
            return c2.make.localeCompare(c1.make);
          })
          this.sortByMakeAscending = !this.sortByMakeAscending;
          this.cars = cars;
        } else {
          cars.sort((c1, c2) => {
            return c1.make.localeCompare(c2.make);
          })
          this.sortByMakeAscending = !this.sortByMakeAscending;
          this.cars = cars;
        }
      })
  }

  sortByOwner () {
    this.carsService
      .getCars()
      .then(cars => {
        if (this.sortByMakeAscending) {
            cars.sort((c1, c2) => {
              return c2.owner.localeCompare(c1.owner);
            })
            this.sortByMakeAscending = !this.sortByMakeAscending;
            this.cars = cars;
        } else {
          cars.sort((c1, c2) => {
            return c1.owner.localeCompare(c2.owner);
          })
          this.sortByMakeAscending = !this.sortByMakeAscending;
          this.cars = cars;
        }
      })  
  }

  sortByDate () {
    this.carsService
      .getCars()
      .then(cars => {
        if (this.sortByMakeAscending) {
            cars.sort((c1, c2) => {
              return c2.date - c1.date;
            })
            this.sortByMakeAscending = !this.sortByMakeAscending;
            this.cars = cars;
        } else {
          cars.sort((c1, c2) => {
            return c1.date - c2.date;
          })
          this.sortByMakeAscending = !this.sortByMakeAscending;
          this.cars = cars;
        }
      })  
  }
}