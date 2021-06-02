/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// input: obj, key, value
// output obj
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// test data
const user = {};
console.log(addPropertyV1(user, 'name', 'Yuliya'));


function addPropertyV2(obj, key, value) {
  // input: obj, ...objects
  // output: obj
  const sourceObj = { [key]: value };
  return Object.assign(obj, sourceObj);
}

// test 2
const user1 = {age: 12};
const key = 'otherAge';
const value = 35;
console.log(addPropertyV2(user1, key, value));


function addPropertyV3(obj, key, value) {
  // input: obj, ...objects
  // output: obj
  const sourceObj = { [key]: value };
  return Object.assign({}, obj, sourceObj);
}

// test 3
const user3 = {age: 12, adress: 'Kharkov'};
const key3 = 'otherAge';
const value3 = 35;
console.log(addPropertyV2(user3, key3, value3));

// examples
// const transaction = {
//   value: 170,
// };
// addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }

// const obj = {};
// obj.name = 'Hello';

// console.log(obj);

// =================================

const newObj = new Object();
newObj.id = 1001;

console.log(newObj);

// =====================================
// 1. add properties, build objects
// 2. filter objects,


// test data

const user4 = {age: 12, adress: 'Kharkov'};
const key4 = 'otherAge';
const value4 = 35;
console.log(addPropertyV3(user3, key, value3));
console.log(addPropertyV3(user3, 'adress', 'Lviv'));
