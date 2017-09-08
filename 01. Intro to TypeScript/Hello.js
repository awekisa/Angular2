// function sayHello (name) {
//   return 'Hello from ' + name;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHello = function () {
        return 'Hello from ' + this.name;
    };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.sayHello = function () {
        return _super.prototype.sayHello.call(this) + ' the cat';
    };
    return Cat;
}(Animal));
var cat = new Cat('Meaw');
var hello = cat.sayHello();
console.log(hello);
