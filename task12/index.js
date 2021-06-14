// option 1
function compareObjects(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } 
  // return !keys1.some((key, index) => obj1[key] !== obj2[key]);
  // return keys1.every((key, index) => key === keys2[index] && obj1[key] === obj2[key]);

  return Object.keys(obj1).every(key => obj1[key] === obj2[key]);
}

// option 2
// not good
// function compareObjects(obj1, obj2) {
//   return (Object.keys(obj1).length !== Object.keys(obj2).length)
//   ? false
//   : Object.keys(obj1).every(key => obj1[key] === obj2[key]);
// }

// option 3
// good
// const compareObjects = (obj1, obj2) =>
//   Object.keys(obj1).length === Object.keys(obj2).length &&
//   Object.keys(obj1).every(key => obj1[key] === obj2[key]);

// option 4
// bad
// function compareObjects(obj1, obj2) {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
//   let obj1Arr = Object.entries(obj1).flat();
//   let obj2Arr = Object.entries(obj2).flat();

//   // bad
//   for (let index = 0; index < obj1Arr.length; index += 1) {
//     if (obj1Arr[index] !== obj2Arr[index]) {
//       return false;
//     }
//   }
//   return true;
// }

// option 5

// function compareObjects(obj1, obj2) {
//   // very bad
//   const arr1 = Object.keys(obj1).concat(Object.values(obj1));
//   const arr2 = Object.keys(obj2).concat(Object.values(obj2));

//   if (arr1.length !== arr2.length) return false;

//   // very bad
//   for (let i = 0; i < arr1.length; i += 1) {
//     if (arr1[i] !== arr2[i]) return false;
//   }

//   return true;
// }


// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true