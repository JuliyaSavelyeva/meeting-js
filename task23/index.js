function positiveSum(arr) {
  return arr.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);

  // if (num > 0) {
  //   return (acc += num);
  // }
  // return acc; 0);
}

const arr = [1, -4, 7, 12];
console.log(positiveSum(arr));

// algo:
// 1. Used reduce to sum num
// 2. if arr entry return 0

function divisors(integer) {
  const result = [];

  for (let index = 2; index <= integer / 2; index += 1) {
    if (integer % index === 0) {
      result.push(index);
    }
  }

  return !result.length ? `${integer} is prime` : result;
}

console.log(divisors(12)); // should return [2,3,4,6]
console.log(divisors(25)); // should return [5]
console.log(divisors(13)); // should return "13 is prime"

// algo:
// 1. create resultArray
// 2. iterate numbers from 2 to integer/2
// 3. if integer % number === 0 > push in resultArray
// 4. if result.length ? result : "13 is prime"
