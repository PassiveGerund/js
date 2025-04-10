// ### Укажите типы
// Создайте такой тип A, при котором фрагмент кода ниже успешно запустится без ошибок:

// ### Гирлянда
// С помощью пакета `chalk` и цикла `for i` выведите десять звездочек, соединенных через
// символы “пробел, дефис, пробел”, цвет каждой звездочки должен определяться по следующему порядку
// - красный, зеленый, синий, красный, зеленый, синий и так далее.

import { faker } from '@faker-js/faker';
import chalk from 'chalk';

type A = { age?: number | string; nick: string; info: object; photo?: string | null };
const a1: A = {
  age: 10,
  nick: 'mynick',
  info: [1, 100],
  photo: 'string',
};

const a2: A = {
  age: '10 years',
  nick: '',
  info: { id: 100 },
  photo: null,
};

const a3: A = {
  nick: '       ',
  info: ['secret', 'key'],
};

const a4: A = {
  nick: '',
  info: {},
};

// Достучаться
// Выведите заглавными буквами значение поля last у объекта a
type A = {
  first: string;
  second: {
    third: string;
    fourth?: string;
    fifth: {
      sixth?: {
        tenth: {
          twelfth?: {
            thirteenth: {
              fifteenth: {
                sixteenth?: {
                  last: 'Достучались';
                };
              };
            };
            fourteenth: string;
          };
        };
        eleventh: string;
      };
      seventh: number;
      eight: string;
    };
  };
};

const a: A = {
  first: 'z',
  second: {
    third: 'f',
    fourth: 'a',
    fifth: {
      sixth: {
        tenth: {
          twelfth: {
            thirteenth: {
              fifteenth: {
                sixteenth: {
                  last: 'Достучались',
                },
              },
            },
            fourteenth: 's',
          },
        },
        eleventh: 'kk',
      },
      seventh: 8,
      eight: 'b',
    },
  },
};

const chain = chalk.red('*') + '-' + chalk.green('*') + '-' + chalk.blue('*');
// console.log(chain);

const lenght = 3;

for (let i = 0; i < lenght; i++) {
  // console.log(chain);
}

/*
### Дата
В тип из предыдущего пункта, добавьте новое поле `createdAt`,
у которого тип будет - дата (`Date`). Попробуйте разобраться с датами сами.
Создайте объект такого типа, в поле `createdAt` запишите текущую дату.
Далее добавьте новое поле `createdAtISO` типа `string`
и запишите туда текущую дату в формате ISO8601 - год, месяц, день, час, минута, секунду, миллисекунда.
 */

type Licence = 'start' | 'basic' | 'prof';
type Period = 1 | 12;

type Bitrix = {
  licence: Licence;
  period: Period;
  createdAt: string;
};

const bitrix: Bitrix = {
  licence: 'start',
  period: 12,
  createdAt: new Date().toDateString(),
};

// console.log(bitrix.createdAt);
// console.log(12, dayjs('2024-08-23T12:30:00Z').toISOString());

/*
### Цвета
Создайте строковый енам с цветами. Добавьте в енам несколько значений, 3-4 будет достаточно.
Выведите все значения через **Object.values**.
*/
enum Colours {
  red = 'red',
  green = 'green',
  yellow = 'yellow',
  blue = 'blue',
}

// Faker
const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// console.log(chalk.red(randomName), chalk.blue(randomEmail));

/*
### Любимые цвета
Создайте енам с различными цветами.
Создайте тип пользователя, у него должно быть имя, id, email, и любимый цвет.
Сгенерируйте массив из нескольких пользователей.
Имя, айди, почту и любимый цвет (из енама) каждого пользователя зарандомьте с помощью **`@faker-js/faker`**.
Выберите рандомный цвет из енама, и выведите всех пользователей, у которых этот цвет является любимым.
*/

type Person = {
  id: number;
  email: string;
  color: Colours;
};

const person = {
  id: faker.number.int(99),
  email: faker.internet.email(),
  color: faker.helpers.arrayElement(Object.values(Colours)),
};

const people = [];
people.push(person);
people.push(person); // не понятно как на основании одного типа создавать разные person

console.log(people);
