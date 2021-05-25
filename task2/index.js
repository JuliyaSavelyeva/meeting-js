function sum(from, to, printer) {
  let num = 0;
  for(let index = from; index <= to; index += 1) {
    num += index;
  }

  printer(num);
}

function printResult(res) {
  console.log('Result is here: ' + res);
}

const result = sum(5, 15, printResult);
console.log(result);