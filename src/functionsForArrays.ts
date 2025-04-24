// Поиск в массиве
import { faker } from '@faker-js/faker';

const people = [];

for (let i = 0; i < 5; i++) {
  const person = {
    name: faker.person.firstName(),
    age: faker.number.int(100),
    status: faker.lorem.sentence(5),
  };
  people.push(person);
}

const findAfterTen = people.find((people) => people.age > 10);
// console.log(people);
// console.log(findAfterTen);

// Умный поиск в массиве
const storage = [
  { age: 10, name: 'first' },
  { age: 20, name: 'second' },
  { age: 30, name: 'third' },
  { age: 40, name: 'fourth' },
];

const smartSearch = (arr: any[], property: any, value: any) => {
  return arr.filter((person: any) => person[property] === value);
};
const person1 = smartSearch(storage, 'age', 30);
// { age: 30, name: 'third' }
const person2 = smartSearch(storage, 'age', 10);
// { age: 10, name: 'first' }
const person3 = smartSearch(storage, 'name', 'second');
// { age: 20, name: 'second' }

// Рандомный фильтр
// Создай любой массив и с помощью filter возьмите из него случайные элементы (используйте Math.random())
// Данные для тестов нужно генерировать с помощью @faker-js/faker.
// console.log(people);

const randomElements = (arr) => {
  const index = Math.random() * 50;
  console.log(index);
  return arr.filter((person: any) => person.age < index);
};
// console.log(randomElements(people));

// Удаление из массива
// Оставьте в массиве только совершеннолетних пользователей (используйте filter)
type User = {
  name: string;
  age: number;
};

let users: User[] = [
  { name: 'Пользователь-1', age: 1 },
  { name: 'Пользователь-21', age: 21 },
  { name: 'Пользователь-30', age: 30 },
  { name: 'Пользователь-14', age: 14 },
  { name: 'Пользователь-18', age: 18 },
  { name: 'Пользователь--1', age: -1 },
  { name: 'Пользователь-1', age: 1 },
];

users = users.filter((person) => person.age >= 18);

// console.log(users);
/* Ожидаемый вывод:
[
  { name: 'Пользователь-21', age: 21 },
  { name: 'Пользователь-30', age: 30 },
  { name: 'Пользователь-18', age: 18 },
]
 */

const storage2 = [
  { age: 10, name: 'first' },
  { age: 20, name: 'second' },
  { age: 30, name: 'third' },
  { age: 40, name: 'fourth' },
];

const smalls = storage2.map((s) => s.age > 20);
// console.log(smalls);

// Обогатите список
// Доработайте код, используя метод map , чтобы он работал как ожидается:

const storage3 = [
  { age: 10, name: 'first' },
  { age: 20, name: 'second' },
  { age: 30, name: 'third' },
  { age: 40, name: 'fourth' },
];

const storage4 = storage.map((person: any) => {
  return {
    age: person.name,
    name: person.age,
    reserved: true,
  };
});

console.log(storage4);
/* Ожидаемый вывод:
[
  { age: 'first', name: 10, reversed: true },
  { age: 'second', name: 20, reversed: true },
  { age: 'third', name: 30, reversed: true },
  { age: 'fourth', name: 40, reversed: true }
]
*/
