/* eslint-disable */

/*
global 
lexical environment =
{
  environmentRecord: {
    message: ''TEST',
    weight: 55,
    run: func
  }
  outer:LexicalEnv: null
}
доступ к данным самим JavaScript
создается при вызове фунции, видит любой блок с {} создает лексическое окружение,
в момент выполнения скрипта, создается глобальное лексическое окружение

forlexicalEnvironment =
{
  environmentRecord: {
    index: 0,
    message: 'Hello',
  }
  outer:LexicalEnv: globalLexicalEnv
}


createlexical environment =
{
  environmentRecord: {
    message: 'just learn it',
    ...
    setMessagge: func
    run: func
  }
  outer:LexicalEnv: globalLexicalEnv
}

runLexEnv = {
  environmentRecord: {
    .....
  }
  outer:LexicalEnv: globalLexicalEnv
}
*/

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

{
  let message = 'someMessage';
  console.log(message);
}

for (let index = 0; index <= 5; index += 1) {
  let message  = 'Hello';
  console.log(message);
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger1 = createMessenger();
const messanger2 = createMessenger();
messanger1.setMessage('TestSender');
messanger1.sendMessage('Andrey');
messanger2.sendMessage('Andrey');
run();

// замыкание - это функция с закрепленным лексическим окружением за ней.

// удаляется лекс. окружение, когда функция выполняется, когда нет на него ссылки

function buildName(name) { 
  let greeting = "Hello, " + name + "!"; 
  let sayName = function() {
      console.log(greeting + " Welcome!"); 
  };
  return sayName; 
}

let sayMyName = buildName("John");
sayMyName();

// ===========================================================
function counter(num) {
  let counter = num;

  function IncreaseCounter() {
      return counter += 1;
  };
  return IncreaseCounter;
}

let counterOne = counter(0);
console.log(counterOne()); // 1
console.log(counterOne()); // 2
console.log(counterOne()); // 3
console.log(counterOne()); // 4

let otherCounter = counter(10);

console.log(otherCounter()); // 10
console.log(otherCounter()); // 11

function sayHi() {
  phrase = "Привет"; // (*)

  if (false) {
    var phrase;
  }

  console.log((phrase));
}
sayHi();

let example;
console.log(example);
example = 10;