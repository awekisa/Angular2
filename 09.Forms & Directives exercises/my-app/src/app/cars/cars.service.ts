import { Injectable } from '@angular/core';

import data from '../data';

@Injectable()
export class CarService {
  getCars () {
    return data
      .getCars()
      .then(cars => {
        return cars
      })
      .catch(err => {
        return err;
      })
  }

  getCarById (id) {
    return data 
      .getCarById(id)
      .then(car => {
        return car;
      })
      .catch(err => {
        return err;
      })
  }

  addCar (car) {
    data.addCar(car);
  }

  editCar (id, car) {
    return data.editCar(id, car)
      .then(car => {
        return car;
      })
  }

  postComment (id, comment) {
    return data
      .postComment(id, comment)
      .then(comment => {
        return comment;
      })
  }
}