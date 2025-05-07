// type Paginated<Person = null> = {
//   total: number;
//   limit: number;
//   offset: number;
//   items: [Person?];
// };
//
// type Person = {
//   name: string;
// };
//
// const responseOfPersons: Paginated<Person> = {
//   total: 10,
//   limit: 5,
//   offset: 0,
//   items: [{ name: 'P1' }],
// };
//
// const responseOfSomething: Paginated = {
//   total: 10,
//   limit: 5,
//   offset: 0,
//   items: [],
// };

// ---Расширение
// Создайте дженерик-тип WithId<T>, который к переданному типу будет добавлять id: number

// type Person = {
//   name: string;
// };
//
// type WithId<T> = {
//   id: number;
//   name: string;
// };
//
// const p: WithId<Person> = {
//   id: 1,
//   name: 'name',
// };

// ---
// parse
// создайте функцию-обёртку parse, которая будет под-капотом делать JSON.parse, и типизировать ответ
//
// type User = {
//   id: number;
//   name: string;
// };
//
// const user: User = {
//   id: 1,
//   name: 'example',
// };
//
// const parse = <User>(user: string): User => {
//   return JSON.parse(user);
// };
// // console.log(user.name);
//
// const userString = JSON.stringify(user);
// // WebStorm должен подсвечивать тип User для этой переменной
// const parsedUser = parse<User>(userString);
// // console.log(parsedUser.name); // example
// // console.log(parsedUser.abc); // Здесь должна гореть ошибка "TS2339: Property abc does not exist on type User"

// ---
// Сортировка id-подобный сущностей
/**
 * Создайте дженерик-функцию "sortById", которая может сортировать массивы любых типов, у которых есть { id: number }.
 * Можно выбирать направление сортировки - asc (по возрастанию) и desc (по убыванию).
 * По умолчанию используется по возрастанию.
 *
 * Если вы забыли про сортировку, то вспомните тему Массивы. map, find, filter, sort, reduce.
 */

import { fakerRU } from '@faker-js/faker';

type User = {
  id: number;
  name: string;
};

type Animal = {
  id: number;
  name: string;
  type: string;
};

const randomUsers: User[] = Array.from({ length: 5 }).map(() => {
  return {
    id: fakerRU.number.int({ min: 1, max: 100 }),
    name: fakerRU.person.fullName(),
  };
});

const randomAnimals: Animal[] = Array.from({ length: 7 }).map(() => {
  return {
    id: fakerRU.number.int({ min: 1, max: 100 }),
    name: fakerRU.person.fullName(),
    type: fakerRU.animal.type(),
  };
});

const randomObjects = Array.from({ length: 4 }).map(() => {
  return {
    id: fakerRU.number.int({ min: 1, max: 100 }),
    company: fakerRU.company.name(),
    food: fakerRU.food.dish(),
  };
});

const sortById = <User>(data: User, direction = 'asc'): User => {
  if (direction === 'desc') {
    return data.sort((a: User, b: User) => (a.id > b.id ? -1 : 1));
  }
  return data.sort((a: User, b: User) => (a.id < b.id ? -1 : 1));
};
//
// sortById(randomUsers);
// console.log(randomUsers); // Должны быть отсортированы по возрастанию id
//
// sortById(randomAnimals, 'desc');
// console.log(randomAnimals); // Должны быть отсортированы по убыванию id

// sortById(randomObjects, 'asc');
// console.log(randomObjects); // Должны быть отсортированы по возрастанию id

/*
В примерах ниже должна гореть ошибка!
Для запуска закомментируйте эти строки
 */
// sortById([{}]);
// sortById([{ a: 10 }]);
// sortById([{ id: 'asj' }]);

// Рандомная выборка

const generateRandomValue = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};
// console.log(generateRandomValue(1, 10));

// <T> - объявление дженерика?
// T[] - тип аргумента
// T - такой же тип должна вернуть как тип аргумента

const getOneRandomItem = <T>(items: T[]): T => {
  return items[generateRandomValue(0, items.length)];
};

// console.log(getOneRandomItem([1, 2, 3, 4]));
// console.log(getOneRandomItem(['a', 'b', 'c']));

const getManyRandomItems = <T>(items: T[], count: number): T[] => {
  // ... "count" раз вызывается функция "getOneRandomItem"
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(getOneRandomItem(items));
  }
  return arr;
};

// console.log(getManyRandomItems(['a', 'b', 'c'], 4));

const getManyRandomItemsV2 = <T>(items: T[], count: number): T[] => {
  // надо чтобы рандомные элементы выбирались только из тех, которые НЕ были выбраны ранее
  return items.reduce((acc, cur) => {
    // console.log(`Взяли значение: ${cur}. Текущий аккумулятор: ${acc}`);
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
};

// const words = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot'];
// const [first, second] = getManyRandomItems(words, 2);
// console.log(first.toUpperCase()); // first должен подсвечиваться типом string
// console.log(second.toUpperCase()); // second должен подсвечиваться типом string

// const numbers = [1, 2, 3, 4, 5, 6];
// const [digit] = getManyRandomItems(numbers, 1);
// console.log(digit * 100); // digit должен подсвечиваться типом number

const dataV2 = ['a', 'b', 'c', 'd', 'e'];
const uniqV2 = getManyRandomItemsV2(dataV2, 5);

console.log(uniqV2); // Здесь должны быть все элементы dataV2 в случайном порядке
console.log(dataV2.length === uniqV2.length); // Здесь должно быть true
