// input: array, array
// output: object

// 1. Learn requirement
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

//  algo
// create new obj
// iterate arrays && add key-value to the object

// ===========option 1
// function buildObject(keysList, valuesList) {
//   const obj = {};

//   for (let index = 0; index < keysList.length; index += 1) {
//     const key = keysList[index];
//     const value = valuesList[index];

//     console.log(`key is ${key}`);
//     console.log(`value is ${value}`);

//     Object.assign(obj, {[key]: value });
//   }
//   return obj;
// }

// ===========option 2
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index, arr) => {
//     console.log(`STEP ${index}`);
//     console.log("accc is", acc);

//     const value = valuesList[index];
//     return Object.assign(acc, {[key]: value });
//   }, {});
// }



// ===========option 3

// const buildObject =(keysList, valuesList) =>
//  keysList.reduce((obj, key, index) => ({...obj, [key]: valuesList[index]}), {});

 // ===========option 4

 function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, key, index, arr) => ({...acc, [key]: valuesList[index]}), {});
}



// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
console.log(result);




const someObj = { name: 'Bob', address: 'Ukraine', age: 56 };
// keys 
// input: obj
// output: arr of string
Object.keys();

// values
// input: obj
// output: arr of anything
Object.values();

// values
// input: obj
// output: arr of key:values
Object.entries();

