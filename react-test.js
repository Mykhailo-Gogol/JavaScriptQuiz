const x = 1;
const x = "hello";
console.log(x);

// Ошибка ' Duplicate declaration "x" '

let b = 20;

if (true) {
  console.log(b);
  let b = 10;
}

// Ошибка 'ReferenceError: b is not defined'

const x;
x = 1;
console.log(x);

// Ошибка 'Missing initializer in const declaration'

const MAX = 10;
let amount = 0;

while (amount++ < MAX) {
  let sum = amount;
}

console.log(sum);

// Ошибка 'ReferenceError: sum is not defined'

const person = {
  firstName: "bob",
  showName() {
    console.log(this.firstName);
  },
};

const foo = function (callback) {
  callback();
};

foo(person.showName);

// undefined

const person = {
  age: 10,
  setAge(newAge) {
    this.age = newAge;
  },
  refreshAge(userId) {
    fetchAgeFromDb(function (newAge) {
      this.setAge(newAge);
    });
  },
};

function fetchAgeFromDb(cb) {
  cb(20);
}

person.refreshAge();
console.log(person.age);

// Ошибка 'this.setAge is not a function'

const add = (a = 0, b = 10) => a + b;
const sum = add(10);
console.log(sum);

// 20

const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 2);
const answer = sum(1, 5, 20, 10);
console.log(answer);

// 38

const multiplyByValue = (value, base, ...numbers) => {
  return numbers.map((number) => number * value + base);
};
console.log(multiplyByValue(2, 100, 1, 5, 20, 10));

// [102, 110, 140, 120]

const names = ["bob", ...["donald"], "suzy", "lacy", ...["richard", "alex"]];
console.log(names);

// [ 'bob', 'donald', 'suzy', 'lacy', 'richard', 'alex']

const min = Math.min(...[1, 5, -1, -10]);
console.log(min);

// -10

const name = "bob";
const age = 20;
const obj = { name, age };

console.log(obj);

// {name: 'bob', age: 20}

const confused = "no";
const myKey = confused;

const obj = {
  [myKey]: false,
};

console.log(obj);

// {'no': false}

const piece = {
  x: 0,
  y: 0,
  move(x, y) {
    this.x = x;
    this.y = y;
  },
};

piece.move(10, 10);
console.log(piece);

// { x: 10, y: 10 }

const [first, , third] = "hello sweet world".split(" ");
console.log(first, third);

// 'hello', 'world'

const { name, age, gender = "m", hairColor: color } = {
  name: "bob",
  age: 20,
  hairColor: "blue",
};

// 'bob', 20', 'm', 'blue'

const dog = { name: "Poly" };

function showDogName() {
  console.log(this.name);
}

const boundShowDogName = showDogName.bind(dog);

boundShowDogName();

// 'Poly'

const userA = {
  name: "Mango",
  age: 5,
};

const userB = {
  ...userA,
  age: 10,
  happy: true,
};

console.log(userB);

// {name: 'Mango', age: 10, happy: true}

const fn = (arr, val) => arr.filter((el) => el > val);

console.log(fn([1, 2, 3, 4, 5], 3));

// [4, 5]

// Какой метод массива используется для поиска уникального элемента коллекции?
// Array.prototype.find()

const fn = (arr) =>
  arr.map((el) => {
    const item = document.createElement("div");
    item.textContent = el;

    return item;
  });

console.log(fn(["html", "css", "js", "react"]));

// Массив DOM-узлов

// Метод Array.prototype.map() всегда вернет массив такой же длины как и исходный?
// Да

// Метод Array.prototype.filter() ...
// перебирает массив, записывая в новый массив те элементы исходного, на итерации которых callback-функция вернула true

// Метод Array.prototype.filter() возвращает...
// всегда массив

// Что из перечисленного не является ложным (Falsy) значением?
// 'false'

// Выберите синтаксически верную запись тернарного оператора.
// const a = b || c ? b + c : b - c;

// Как получить список всех ключей объекта obj?
// Object.keys(obj)

// Статические свойства класса это...
// свойства доступные только классу, но не его экземплярам

// Какое ключевое слово реализует наследование классов в ES6?
// extends

// Что делает super() в конструкторе класса?
// Вызывает конструктор родительского класса

// В ES6 классе, super() необходимо вызвать...
// до первого обращения к ключевому слову this в теле конструктора

//  Что такое обещание (promise)?
// Это объект, представляющий конечный результат асинхронной операции

// Что возвращает метод Promise.prototype.then()?
// Обещание (promise)

// Какой метод JSON преобразует объект в строку?
// stringify()

// Что возвращает метод fetch()?
// Обещаение (promise)

// . Выберите не существующий HTTP-метод
// GRAB

// Какой символ URL-строки указывает на начало списка параметров запроса?
// ?

//NPM это...
//менеджер пакетов, который используется Node.js приложениями

//Выберите описание package.json
//Это JSON-представление приложения и его зависимостей

//Какой командой будет запускаться npm скрипт с именем"qwerty"?
//npm run qwerty

//Какие 2 типа экспорта модулей существуют в ESM (ECMAScript Modules)?
//named export и default export

// Что делает следующий код?
//import { a, b } from 'lib';
//Используя декструктуризацию объекта, получит из модуля lib, экспорты с именами a и b

//Выберите верную запись импорта всех именованных экспортов модуля someModule в виде одного объекта
//import * as obj from 'someModule'
