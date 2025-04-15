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

// console.log(datePars(date, cbPast, cbFuture));

/* ### Билдер сообщений
Напишите функцию, возвращающую другую функцию, чтобы этот код заработал  */

const phrase = 'Bye';
const sayBuilder = (phrase: string) => {
  return phrase;
};
const sayHi = (name) => {
  return sayBuilder(phrase) + ' ' + name;
};
// console.log(sayHi('Maxim')); // Hi, Maxim!

// const sayHi = sayBuilder('Hi'); // тут у sayHi нет аргументов, поэтому не понятно как передавать имя
// console.log(sayHi('Ruslan')); // Hi, Ruslan! // а тут аргумент уже есть
