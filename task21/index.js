/* eslint-disable max-classes-per-file, no-console */
class Sportsman {
  constructor(firstName) {
    console.log('before', this);
    this.firstName = firstName;

    console.log('after', this);
  }

  run() {
    setTimeout(() => {
      console.log(`${this.firstName} is running`);
    }, 3000);
  }

  swim() {
    console.log(`Hello`);
  }
}

class Swimmer extends Sportsman {
  constructor(firstName, swimStyle) {
    super(firstName);
    this.swimStyle = swimStyle;
    console.log(this);
  }

  swim() {
    console.log(`${this.firstName} is swimming ${this.swimStyle}`);
  }
}

// test data
const obj = {
  firstName: 'Andrey',
  run() {
    console.log(`${this.firstName} is running`);
  },
};

console.log(obj);

const sportsman = new Sportsman('Tom');
sportsman.run();

console.log(sportsman);

const swimmer1 = new Swimmer('Ann', 'test1');
const swimmer2 = new Swimmer('Bob', 'test2');

swimmer1.swim();
swimmer2.swim();
swimmer1.run();
swimmer2.run();

console.log(swimmer1);
