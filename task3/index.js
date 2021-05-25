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

function getPrimes(num) {
  for (let index = 2; index <= num; index += 1) {

    let isPrime = true;

    for (let number = 2; number < index; number += 1) {
      if(index % number === 0) {
        isPrime = false;
        break;
      }
    }

    if(isPrime) {
      console.log(index);
    }
  }
}

console.log(getPrimes(15));