import { Component, OnInit } from '@angular/core';

import data from '../data';

@Component({
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  page: 1;
  cars;
  sortByMakeAscending = false;

  ngOnInit () {
    data
      .getCars()
      .then(cars => {
        this.cars = cars
      })
  }

  sortByMake () {
    data
      .getCars()
      .then(cars => {
        let sortedCars = [];
        for(let key in cars) {
          sortedCars.push(cars[key]);
        }
        if (this.sortByMakeAscending) {
            sortedCars.sort((c1, c2) => {
              return c2.make.localeCompare(c1.make);
            })
            this.sortByMakeAscending = !this.sortByMakeAscending;
            this.cars = sortedCars;
        } else {
          sortedCars.sort((c1, c2) => {
            return c1.make.localeCompare(c2.make);
          })
          this.sortByMakeAscending = !this.sortByMakeAscending;
          this.cars = sortedCars;
        }
      })  
  }

  sortByOwner () {
    data
      .getCars()
      .then(cars => {
        let sortedCars = [];
        for(let key in cars) {
          sortedCars.push(cars[key]);
        }
        if (this.sortByMakeAscending) {
            sortedCars.sort((c1, c2) => {
              return c2.owner.localeCompare(c1.owner);
            })
            this.sortByMakeAscending = !this.sortByMakeAscending;
            this.cars = sortedCars;
        } else {
          sortedCars.sort((c1, c2) => {
            return c1.owner.localeCompare(c2.owner);
          })
          this.sortByMakeAscending = !this.sortByMakeAscending;
          this.cars = sortedCars;
        }
      })  
  }

  sortByDate () {
    data
      .getCars()
      .then(cars => {
        let sortedCars = [];
        for(let key in cars) {
          sortedCars.push(cars[key]);
        }
        if (this.sortByMakeAscending) {
            sortedCars.sort((c1, c2) => {
              return c2.date - c1.date;
            })
            this.sortByMakeAscending = !this.sortByMakeAscending;
            this.cars = sortedCars;
        } else {
          sortedCars.sort((c1, c2) => {
            return c1.date - c2.date;
          })
          this.sortByMakeAscending = !this.sortByMakeAscending;
          this.cars = sortedCars;
        }
      })  
  }
}