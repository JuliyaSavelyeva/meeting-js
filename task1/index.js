
// =========================
function getSenseOfLife() {
  return 42;
};
console.log(getSenseOfLife(42));

// =========================
function getSquared(num) {
  return num * num;
}
console.log(getSquared(42));

// =========================
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(40, 10));

// =========================
function greeting(age) {
 console.log(`'I am ${age} years old'`);
}

const greetingExpression = function (age) {
  console.log(`'I am ${age} years old'`);
};

console.log(greeting(35));
console.log(greetingExpression(35));

// =========================
const mult = (num1, num2) => num1 * num2;
console.log(mult(2, 5));

// =========================
const square = num => num * num;
console.log(square(42));


