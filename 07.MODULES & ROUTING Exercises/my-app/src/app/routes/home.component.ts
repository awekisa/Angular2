import { Component, OnInit } from '@angular/core'

import data from '../data'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cars;

  ngOnInit () {
    data
      .getCars()
      .then(cars => {
        let sortedCars = [];
        for(let key in cars) {
          sortedCars.push(cars[key])
        }
        sortedCars.sort((c1, c2) => {
          return c2.date - c1.date;
        })
        this.cars = sortedCars.slice(0, 6);
      })
  }
}