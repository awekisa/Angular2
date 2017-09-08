class Data {
  private cars = [
    {
      id: 0,
      make: 'car1',
      model: 'model1',
      image: 'https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg',
      date: new Date('2017-11-21'),
      owner: 'gosho',
      description: 'cool car',
      price: 100000,
      engine: 'A234RD',
      comments: [
        "I don't like it",
        'lame'
      ]
    },
    {
      id: 1,
      make: 'car2',
      model: 'model2',
      image: 'http://media.caranddriver.com/images/media/638444/porsche-boxster-photo-640543-s-original.jpg',
      date: new Date('2017-11-12'),
      owner: 'alcho',
      description: 'cool car',
      price: 120000,
      engine: 'AA KK',
      comments: [
        "nicie",
        'beauty'
      ]
    },
    {
      id: 2,
      make: 'car3',
      model: 'model3',
      image: 'https://sfw.so/uploads/posts/2010-06/1277086633_koenigseggccx_3.jpg',
      date: new Date('2017-11-16'),
      owner: 'Troll Petrov',
      description: 'cool car',
      price: 200000,
      engine: '213AC',
      comments: [
        "I like it",
        'cool'
      ]
    },
    {
      id: 2,
      make: 'car4',
      model: 'model4',
      image: 'https://sfw.so/uploads/posts/2010-06/1277086633_koenigseggccx_3.jpg',
      date: new Date('2017-12-16'),
      owner: 'Troll Petrov',
      description: 'cool car',
      price: 200000,
      engine: '213AC',
      comments: [
        "I like it",
        'cool'
      ]
    }
  ]
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
  private comments = []

  getCars () {
    return new Promise((resolve, reject) => {
      resolve(this.cars)
    })
  }

  getCarById (id) {
    return new Promise((resolve, reject) => {
      let car = this.cars[id]
      resolve(car)
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