// const known = undefined;
// const email = '';
// const nick = 'nickname';
// const age = 0;
// const isReady = false;
// const size = 1;
// const photo = null;

// const where = {
//   ...(email ? { email } : { n: 1 }),
//   ...(nick ? { nick, n: 2 } : { g: 8 }),
//   ...(age ? { age } : { n: 3 }),
//   ...(isReady ? { isReady, n: 10 } : {}),
//   ...(size ? { size, n: 9 } : {}),
//   ...(known ? { known } : { x: 4 }),
//   ...(photo ? { photo } : { x: 5 }),
// };

// console.log(where);
// n:9, nick : 'nickname', size: 1; x:5

const mergeToNewObject = (a: any, b: any) => {
  const arr3 = { ...a, ...b };
  return arr3;
};

// const obj1 = { a: 10, b: 100, c: 1 };
// const obj2 = { a: 20, b: 200, e: 2 };
// const obj3 = mergeToNewObject(obj1, obj2);

// console.log(obj1); // { a: 10, b: 100, c: 1 }
// console.log(obj2); // { a: 20, b: 200, e: 2 }
// console.log(obj3); // { a: 20, b: 200, c: 1, e: 2 }

// Merge с очередностью
/* Напишите функцию merge, которая будет производить слияние двух объектов с выбранной
очередностью с помощью оператора .... Доработайте код ниже, чтобы реальный вывод совпадал с ожидаемым.
Порядком полей в выводе можно принебречь (то есть {a:10, b:100} все равно что {b:100, a:10}).*/

const merge = (a: any, b: any, order?: 1 | 2) => {
  if (order === 2) {
    return { ...b, ...a, merged: 'Yes!' };
  }
  return { ...a, ...b, merged: 'No!' };
};

// const obj1 = { a: 10, b: 'b', c: 100, child: { name: 'ch', surname: 'hc' } };
// const obj2 = { a: 20, b: ['b'], d: 200, child: { aa: 'aa', bb: 'bb' } };

// console.log(merge(obj1, obj2));
/* Вывод:
{
  a: 20,
  b: [ 'b' ],
  c: 100,
  child: { aa: 'aa', bb: 'bb' },
  d: 200,
  merged: 'NO!'
}
*/

// console.log(merge(obj1, obj2, 1));
/* Вывод:
{
  a: 20,
  b: [ 'b' ],
  c: 100,
  child: { aa: 'aa', bb: 'bb' },
  d: 200,
  merged: 'NO!'
}
*/

// console.log(merge(obj1, obj2, 2));
/* Вывод:
{
  a: 10,
  b: 'b',
  c: 100,
  child: { name: 'ch', surname: 'hc' },
  d: 200,
  merged: 'YES!'
}
*/
// Исправьте код. Массивы
/* Напишите деструктуризацию, которая достаёт значения и записывает их в переменные,
чтобы реальный вывод программы совпадал с ожидаемым.
Используйте только одну деструктуризацию
*/
const storage = [
  'nick',
  'nack',
  'nock',
  [
    {
      first: 'forecast',
      child: null,
    },
    {
      first: 'castfore',
      child: null,
    },
    'zzz',
  ],
  'no-1',
  'no-2',
] as const;

const [, , , [, b1, cos], ...nos] = storage;
// console.log(nos); // [ 'no-1', 'no-2' ]
// console.log(cos); // [ 'zzz' ]
// console.log(b1); // { first: 'castfore', child: null }

// Исправьте код. Объекты
/* Напишите деструктуризацию, которая достаёт значения и записывает их в переменные,
чтобы реальный вывод программы совпадал с ожидаемым.
Используйте только одну деструктуризацию
 */
const megaobject = {
  child: null,
  child1: {
    nick: 'name',
    nicknames: ['n1', 'n2', { n: 'n', b: 'b' }],
    james: {
      kates: {
        nicks: {
          nicknames: ['nn', 'vv', 'gg'],
          child: {
            nick: 'childName',
            child: undefined,
          },
        },
      },
    },
  },
  child2: {},
  child3: 'child3',
};

const {
  child,
  child1: {
    nick,
    nicknames,
    james: {
      kates: {
        nicks: {
          nicknames: [nicknames1, ...otherNicks],
          child: { nick: nick1, child: child1 },
        },
      },
    },
  },
  ...otherChilds
} = megaobject;

/*
console.log(child); // null
console.log(otherChilds); // { child2: {}, child3: 'child3' }
console.log(nick); // name
console.log(nicknames); // [ 'n1', 'n2', { n: 'n', b: 'b' } ]
console.log(nicknames1); // nn
console.log(otherNicks); // [ 'vv', 'gg' ]
console.log(nick1); // childName
console.log(child1); // undeined
*/
