/*
Вам даны 4 объекта.
У каждого из них есть поле dateOfBirth, в котором записана дата его рождения.
Добавьте в каждый объект поле age, в котором будет записано полное количество лет человека.
Далее выведите каждый объект.

В решение задачи вам поможет объект Date для работы с датами, и его метод getTime:
* https://learn.javascript.ru/date
* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date


--- Вывод программы, запущенной 20 января 2025
Вывод программы должен быть следующим:
{ name: 'Alex', dateOfBirth: 2024-05-15T00:00:00.000Z, age: 0 }
{ name: 'Jake', dateOfBirth: 1970-01-01T00:00:00.000Z, age: 55 }
{ name: 'John', dateOfBirth: 2007-12-30T08:32:59.953Z, age: 17 }
{ name: 'Bob', dateOfBirth: 2025-01-20T08:20:21.741Z, age: 0 }
 */

const alex = {
 name: 'Alex',
 dateOfBirth: new Date('2024-05-15'),
};



const jake = {
 name: 'Jake',
 dateOfBirth: new Date('1970-01-01T00:00:00.000Z'),
};

const john = {
 name: 'John',
 dateOfBirth: new Date('2007-12-30T11:32:59.953+03:00'),
};

const bob = {
 name: 'Bob',
 dateOfBirth: new Date(),
};

// ... Ваш код здесь


function calculateAge(dateOfBirth) {
 const today = new Date();
 let age = today.getFullYear() - dateOfBirth.getFullYear();
 const month = today.getMonth() - dateOfBirth.getMonth();

 if (month < 0 || (month === 0 && today.getDate() < dateOfBirth.getDate())) {
  age--;
 }

 return age;
}

bob.age = calculateAge(bob.dateOfBirth);
console.log(`${bob.name} is ${bob.age} years old.`);


