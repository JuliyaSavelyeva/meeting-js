const numbersList1 = [1, 2, 3, 4, 5];

// input: none
// output: number

const res = numbersList1.pop();
console.log(res);
console.log(numbersList1);

// =============================

const numbersList2 = [1, 2, 3, 4, 5];

// input: number
// output: number

const pushRes = numbersList2.push(6);
console.log(pushRes);
console.log(numbersList2);

// =================================

const numbersList3 = [1, 2, 3, 4, 5];

// input: none
// output: number

const shiftRes = numbersList3.shift();
console.log(shiftRes);
console.log(numbersList3);

// =========================
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

// filter
// input: callback, object (optional)
// output: arr

// callback
// input: element (number), index(number) (optional), array (optional)
// output: boolean

// function filterCallback(element, index, array) {
//   console.log('STEP #' + index);
//   console.log('element is ' + element);
//   console.log('array is ' + array);
//   if (element > 5) {
//     return true;
//   }
//   return false;
// }

const bigNumbers = anotherNumbersList.filter(el => el > 5);

console.log(bigNumbers);
console.log(anotherNumbersList);

// function filterCallback(element, index, array) {
//   if(element > 5 && index % 2 === 1) {
//     return true;
//   }
//   return false;
// }

// filterCallback(5, 0, ahothrFilterCallback);

const evenPositions = anotherNumbersList.filter((el, index) => el > 5 && index % 2 === 1);
console.log(evenPositions);
