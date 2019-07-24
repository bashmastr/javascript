// CONST & LET
let name = "bash";

name = "Ali"; // const cannot reassigned

name = "Ali";

// console.log(name);

person = {
  name: "Bash",
  Age: 22
};
// console.log(person);

const nums = [1, 2, 3, 4];
nums.push(9);
// console.log(nums);

// ARROW FUNCTIONS

// function sayHello() {
//   console.log("hello");
// }

const sayHello = name => console.log("hello " + name);
const sayHello = name => console.log(`hello  ${name}`); //another way

const fruits = ["oranges", "mangoes ", "bananas"];

sayHello("bash");
// FOREACH

fruits.forEach((fruit, index) => {
  //   console.log(fruit, index);
});

fruits.forEach((fruit, index) => console.log(fruit));

// MAP

const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());
// console.log(singleFruit);

//FILTER

const people = [
  { id: 1, name: "Junaid" },
  { id: 2, name: "bash" },
  { id: 3, name: "Jawad" }
];

const people2 = people.filter(person => person.id != 2);
// console.log(people2);

// SPREAD

arr = [1, 2, 3];
arr1 = [...arr, "bash", "Ali"];
arr3 = [...arr.filter(num => num != 2)];

// console.log(arr3);

const person1 = {
  id: 1,
  name: "Jawad"
};

const emailPerson = {
  ...person1,
  email: "bashmastr@gmail.com"
};
// console.log(emailPerson, arr3);

// DESTRUCTURING

const profile = {
  name: "Qamar",
  address: {
    street: "100 north",
    city: "LHR"
  },
  hobbies: ["programing", "reading"]
};

const { name, address } = profile;

console.log(name, address.city);

// CLASSES

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hell! My name is ${this.name} and I am
    ${this.age}`;
  }
}

const person1 = new person("bash", 33);
const person2 = new person("Jawad", 22);

console.log(person2.greet());

// SUBCLASSES

class coustomers extends person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes ${this.balance}`;
  }
}

const person3 = new coustomers("Junaid", 28, 200);

console.log(person3.info());

// MODULES

// file 1 (file1.js)

export const name = "bash";
export const arr = [1, 2, 3];

export default person;

//file 2 (file2.js)

import { name, arr } from "./file1.js";

import person from "./file1"; //remove brackets by using default line 132
