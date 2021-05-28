const students = ['Roman', 'Alex', 'Yuliya', 'Olga', 'Vlad'];

// input: callback, object (optional)
// output: new array

// callback
// input: string element, index (optional), array (optional)
// output: object new element

// function mapCallback(el) {
//   return 'Hello, '  + el;
// }

// const greeting = students
// .filter(el => {
//   if(el === 'Roman') {
//     return false
//   }
//   return true;
// })
// .map(el => {
//   return 'Hello, ' + el;
// });


const greeting = students.filter(el => el !== 'Roman').map(el => 'Hello, ' + el);


// const greeting = students.map(el => 'Hello, '  + el);
console.log(greeting);

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// input: callback, initial acc value (number) (optional)
// output: number

// callback
// input: accumulator, element, index(optioanal), array (optional)
// output: number

// function reduceCallback(acc, element, index, array) {
//   console.log('STEP #' + index);
//   console.log('element is ' + element);
//   console.log('acc: ' + acc);
//   if (element > 100) {
//     acc += element;
//   }

//   return acc;
// }

// const transactionsSum = transactions.reduce(reduceCallback, 0);
// console.log(transactionsSum);

const reduceCallback = transactions.reduce((acc, element) => {
  if (element > 100) {
    acc.push(element);
  }
  return acc;
}, []);

console.log(reduceCallback);