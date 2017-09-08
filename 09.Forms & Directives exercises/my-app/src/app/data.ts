import { Car } from './cars/car';

class Data {
  private cars: Car[] = []
  private owners = [
    {
      id: 0,
      name: 'alcho',
      image: 'http://images.clipartpanda.com/person-clip-art-LiKqzraia.png',
      cars: ['car2']
    },
    {
      id: 1,
      name: 'gosho',
      image: 'http://www.magnificentbastard.com/images/pics/inspector-clouseau.jpg',
      cars: ['car1']
    },
    {
      id: 2,
      name: 'Troll Petrov',
      image: 'http://www.asatrublog.com/wp-content/uploads/internet_troll_2.jpg',
      cars: ['car3, car4']
    }
  ]

  private comments = [];


  getCars () {
    return new Promise((resolve, reject) => {
      resolve(this.cars)
      reject()
    })
  }

  getCarById (id) {
    return new Promise((resolve, reject) => {
      let foundCar;
      for (let car of this.cars) {
        if (car.id == id) {
          foundCar = car
        }
      }
      resolve(foundCar)
    })
  }

  addCar(car) {
    let id = this.cars.length + 1;
    car.id = id;
    car.date = Date.now();
    car.comments = [];
    this.cars.push(car);
  }

  editCar(id, editedCar) {
    return new Promise((resolve, reject) => {
      for (let car of this.cars) {
        if (car.id == id) {
          car = editedCar;
          break;
        }
      }
      resolve(editedCar);
    })
  }

  postComment (id, comment) {
    return new Promise((resolve, reject) => {
      for (let car of this.cars) {
        if (car.id == id) {
          car.comments.push(comment);
          break;
        }
      }
    })
  }

  getOwners () {
    return new Promise((resolve, reject) => {
      resolve(this.owners)
    })
  }

  getOwnerById (id) {
    return new Promise((resolve, reject) => {
      let owner = this.owners[id]
      resolve(owner)
    })
  }
}

let data = new Data ();

export default data;