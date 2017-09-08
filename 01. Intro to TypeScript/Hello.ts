// function sayHello (name) {
//   return 'Hello from ' + name;
// }

// let greeting = sayHello('Ivan');
// console.log(greeting);

// mandatory type variables
// number
// string
// any...
// function Greeter (name: string) {
//   this.name = name;
// }

// Greeter.prototype.sayHello = function () {
//   return 'Hello from ' + this.name;
// }

// let greeter = new Greeter ('stringy');
// let greeting = greeter.sayHello();
// console.log(greeting);

// ***************** Classes ******************
// class Greeter {
//   private name: string;

//   constructor (name: string) {
//     this.name = name;
//   }

  
//   sayHello () {
//     return 'Hello from ' + this.name;
//   }
// }

// let greeter = new Greeter ('Mindy');
// let greeting = greeter.sayHello();
// console.log(greeting);

// **************** Interfaces ********************
// interface Person {
//   firstName: string,
//   lastName: string
// }

// class Greeter {
//   private person: string;

//   constructor (person: Person) {
//     this.person = person.firstName + ' ' + person.lastName;
//   }

  
//   sayHello () {
//     return 'Hello from ' + this.person;
//   }
// }

// let greeter = new Greeter ({
//   firstName: 'Gogo',
//   lastName: 'Gogov'
// });
// let greeting = greeter.sayHello();
// console.log(greeting);

// **************************** Unions ***************************
// type nameOrNameArray = string | string[] | number

// function sayHello (name: nameOrNameArray) {
//   if (typeof name === 'string') {
//     console.log(name)
//   } else if (typeof name === 'number') {
//     console.log(name)
//   } else {
//     console.log(name.join(' '))
//   }
// }

// // sayHello (['shosoh', 'doomev'])
// sayHello (123)

// *************** Class inheritance *************************
class Animal {
  private name: string;

  constructor (name: string) {
    this.name = name;
  }

  sayHello () {
    return 'Hello from ' + this.name;
  }
}

class Cat extends Animal {
  constructor (name: string) {
    super(name);
  }

  sayHello () {
    return super.sayHello() + ' the cat' 
  }
}

let cat = new Cat('Meaw')
let hello = cat.sayHello()
console.log(hello)