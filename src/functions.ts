// Наибольший делитель
// console.log(sumValues(object));

import { fakerRU } from '@faker-js/faker';
import dayjs from 'dayjs';

const maxDevider = (number: number) => {
  for (let i = number - 1; i < number; i--) {
    if (number % i === 0) {
      return i;
    }
  }
};
// console.log(maxDevider(10));

/*
### Сумма значений объекта
Напишите функцию, которая на вход получает объект и выдает сумму значений его полей.
Гарантируется, что в объекте будут содержаться **только числа**.
*/
const object = {
  key1: 1,
  key2: 2,
  key3: 3,
};

const sumValues = (obj: object) => {
  let sum = 0;
  Object.values(obj).forEach(function (num) {
    sum += num;
  });
  return sum;
};

/*
### Возраст Стаса
Напишите функцию, которая принимает на вход массив объектов.
Ищет объект, у которого значение поля `name` равно `Stas` и возвращает значение поля `age`  у этого объекта.
Если такого объекта нет, необходимо вернуть “Объект не найден",
если объект найден, но поле `age` содержит значения `null` или `undefined`, необходимо вернуть “Возраста нет”.
** Данные для тестов нужно генерировать с помощью `@faker-js/faker`.**
 */

// type Person = {
//   name: 'Stas' | 'NeStas';
//   age: number;
// };

const people = [];
for (let i = 0; i < 3; i++) {
  const person: Person = {
    name: fakerRU.person.firstName('male'),
    age: fakerRU.number.int(99),
  };
  people.push(person);
}
// console.log(people);

const ageStas = (people: object) => {
  let result = '';
  for (const person of people) {
    if (person.name === 'Stas') {
      result = person.age || 'Возраст не найден';
      break;
    } else {
      result = 'Объект не найден';
    }
  }
  return result;
};

// console.log(ageStas(people));

/*
### Колбеки
Напишите функцию, которая на вход принимает строку, представляющую собой дату в ISO8601 формате.
А так же на вход принимает два колбека - `cbPast` и `cbFuture`.
Функция парсит эту строку с помощью библиотеки `dayjs` и определяет в каком времени эта дата - прошлое, настоящее или будущее.
- Прошлое - вчерашний день и ранее
- Настоящее - текущий день
- Будущее - завтрашний день и далее
Если это настоящее, то действий не требуется.
Если это будущее, то нужно вызвать `cbFuture`.
Если это прошлое, то нужно вызвать `cbPast`.*/

const cbPast = () => {
  return 'cbPast';
};

const cbFuture = () => {
  return 'cbFuture';
};

// const date = new Date();
const date = new Date('05 October 2026 14:48 UTC');

const datePars = (date, cbPast, cbFuture) => {
  const ourDate = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
  const currentDate = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');

  if (currentDate < ourDate) {
    return cbFuture();
  } else if (currentDate > ourDate) {
    return cbPast();
  }
  return currentDate;
};

console.log(datePars(date, cbPast, cbFuture));

/* ### Билдер сообщений
Напишите функцию, возвращающую другую функцию, чтобы этот код заработал  */

const sayBuilder = (phrase: string) => {
  return (name: string) => {
    // вот тут в sayBuilder возвращает функцию sayHi с апргументом (стр 122)
    return phrase + ', ' + name; // вот тут можно использовать аргументы обеих функций
  };
};

const sayHi = sayBuilder('Hi'); // тут параметр sayHi будет сразу передан в sayBuilder , поэтому пока тут аргумента не нужно.
// console.log(sayHi('Nadin')); // не очевидно, куда именно этот аргумент будет передан в sayBuilder()

const sayBye = sayBuilder('Bye');
// console.log(sayBye('Maxim')); // Bye, Maxim!

// Самопроверка
const array = [
  [1, 9, 9],
  [2, 3, 6],
  [5, 5, 25],
  [8, 3, 24],
  [0, 0, 0],
];

const multiply = (a: number, b: number) => a * b;
const check = (array, somefunction) => {
  for (const el of array) {
    // console.log(el);
    // console.log(multiply(el[0], el[1]));
    if (somefunction(el[0], el[1]) !== el[2]) {
      return false;
    }
    console.log(true);
  }
};
// console.log(check(array, multiply));

// шифр
const str1 = 'the quick brown fox jumps over the lazy dog';
const arr1 = str1.split('');
const str2 = 'oak lgypb wited zts qgfch tuki oak mjrn xtv';
const arr2 = str2.split('');

const arr3 = {};

for (let i = 0; i < arr1.length; i++) {
  arr3[arr2[i]] = arr1[i];
}
// console.log(arr3); // сопоставили

const rebusstr = 'ntg ajuk fjbydv vikjo citvikhh yd mkjidydv qjujhpiyco. ptdvijoh!';
const rebusarr = rebusstr.split('');

const result = [];

for (const letter of rebusarr) {
  if (arr3[letter] === undefined) {
    arr3[letter] = letter;
  }
  result.push(arr3[letter]);
}

// console.log(result.join(''));

// фибоначи
// 1, 1, 2, 3, 5, 8, 13, 21, 34
let number1 = 1;
let number2 = 1;
let sum = 1;
let index = 2;

const fib = (row) => {
  if (index < row) {
    number2 = number1;
    number1 = sum;
    sum = number2 + number1;
    index++;
    return fib(row);
  }
  return sum;
};
// console.log(fib(8));

// Калькулятор времени скачивания файла
