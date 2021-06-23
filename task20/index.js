function printMessage(country, city) {
  console.log(this);
  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}
const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};

// console.dir(printMessage);
// input: context, arguments
// output: new func

// bind option 1
// const printMessageBinded = printMessage.bind(user);
// printMessageBinded('Ukraine', 'London');

// bind option 2
// const printMessageBinded = printMessage.bind(user, 'Ukraine', 'London');
// printMessageBinded();

// bind option 3
// const printMessageBinded = printMessage.bind(user, 'Ukraine');
// printMessageBinded('London');

// output: func

export function bind(func, context, ...args) {
  console.log(args);

  // input: arg1 ... argN
  // output: anything
  return function (...funcArgs) {
    console.log('func is called');

    // input: context, arg
    // output: res of func
    return func.call(context, ...args, ...funcArgs);
  };
}

function sum(c, d) {
  console.dir('context is: ', this);
  console.log('arguments is: ', arguments);
  return this.a + this.b + c + d;
}

const context = {
  a: 100,
  b: 40,
};

const sumBinded = bind(sum, context);
console.dir(sumBinded);
console.dir(sumBinded(10, 30));

// HW
