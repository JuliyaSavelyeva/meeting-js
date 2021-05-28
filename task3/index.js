// How to work on tech tasks. Step by step guide
// 1. Learn requirement
// 2. Create step by step algo (& input/output for funtions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// algo
// 1. iterate numbers from two to end;
// 2. check if number is prime;
// 2.1 iterate numbers from 2 to number (10);
// 2.2 if number is divited by any other - not prime;


// input: number;
// output: undefined

// function getPrimes(num) {
//   for (let index = 2; index <= num; index += 1) {

//     let isPrime = true;

//     for (let number = 2; number < index; number += 1) {
//       if(index % number === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if(isPrime) {
//       console.log(index);
//     }
//   }
// }
// getPrimes(15);


const squareArray = arr => Array.isArray(arr) ? arr.map(num => num * num) : null;

console.log(squareArray(222));
console.log(squareArray([1, 2, 4]));

// input: number;
// output: boolean;

function checkIsPrime(number) {
  for (let innerNum = 2; innerNum < number; innerNum += 1) {
    if(number % innerNum === 0) {
      return false;
    }
  }

  return true;
}

function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    if (checkIsPrime(number)) {
      console.log(number);
    }
  }
}

getPrimes(15);