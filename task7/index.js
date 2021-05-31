// input: num, num, ... numN,
// output: number

// function multiply() {
//   console.log(arguments);
//   for (let el of arguments) {
//     console.log(el);
//   }
// }


// rest operator
function multiply(...args) {
  return args.reduce((acc, el) => acc * el);
}

console.log(multiply(2, 5, 10));

// =========
// spred operator

const array = [1, 3, 4, 5, 6];
console.log(...array);

const arrayCopy = [...array];
console.log(arrayCopy);


// ==================

const arr = [4, 2, 3, 1, -22, -10];

// input: callback
  // input: element 1, element 2
  // output: number
// output: arr
const sortRes = arr.sort((el1, el2) => {
  // el1 > el2
  // el1 === el2
  // el1 < el2
  return el1 - el2;
});

console.log(sortRes);


const mapArrayElements = (arr, callback) => {
  const res = [];

  for(let index = 0; index < arr.length; index += 1) {
    const arrElement = arr[index];
    const callbackRes = callback(arrElement, index, arr);
    console.log(callbackRes);

    res.push(callbackRes);
  }
  return res;
};

// test
const entireArr = [1, 2, 3, 4, 5];

function test(el) {
  return el * 2;
}

console.log(mapArrayElements(entireArr, test));