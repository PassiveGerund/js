//Вывод пар ключ-значение
// const person = { age: 10, name: '', child: 'Max' };
//
// for (key in person) {
//     console.log(key , person[key]);
// }
/* Для объекта person ожидаемый вывод:
age: 10
name:
child: Max
*/

//### Ключи и значения
// Дан объект. Необходимо сформировать два массива - в один записать все ключи объекта, в другой все его значения.
// Запрещено использовать конструкции `Object.keys()` и `Object.values()`
// const person = { age: 10, name: '', child: 'Max' };
// let keysperson = [];
// let valueperson = [];
//
// for (key in person) {
//      keysperson.push(key);
//      valueperson.push(person[key]);
// }
//
// console.log(keysperson);
// console.log(valueperson);


/*
Дан объект пользователя. Он содержит различные поля и значения.

Вам необходимо вывести:
* Максимальная длина массива у этого объекта
* Последний элемент самого длинного массива у этого объекта

--- Пояснение
В данном примере у объекта user есть 3 поля, которые содержат массивы:
* example - длина 3
* permissions - длина 2
* emails - длина 4

То есть, самым длинным массивом у этого объекта является массив из поля emails,
значит ответ должен быть следующим:
Максимальная длина: 4. Последнее значение: peter@example.com

--- Хардкод
Хардкод использовать не нужно!!! То есть такое решение:
console.log(`Макс длина: ${user.emails.length}. Последнее значение: ${user.emails[3]}`)

Неправильное!

Находить самый длинный массив необходимо самостоятельно, проверяя все имеющиеся массивы!
 */

const user = {
    example: [1, 2, 3],
    'X-Address': {
        street: 'Ленина',
        house: '10-Б',
    },
    nickname: null,
    permissions: [true, false],
    age: 101,
    emails: ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'peter@example.com'],
    name: 'Peter Charles',
    isAdult: true,
    now: new Date().toISOString(),
};

setOfArrays = [];
let max = "";
let lastel = "";

for(key in user) {
    if (Array.isArray(user[key])) {
        // console.log(user[key]); // все массивы
        setOfArrays.push(user[key].length); //
        max = setOfArrays[0];
        for(let i = 0; i < setOfArrays.length; i++) {

            if (max < setOfArrays[i+1]) {
                max = setOfArrays[i+1];
                lastel = user[key][user[key].length - 1];

            }
        }
    }
}

console.log(`max: ${max}, lastel: ${lastel}`);

// console.log(setOfArrays);

