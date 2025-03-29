/*
Напишите программу, которая сможет сравнить два объекта и вывести "одинаковые" ли они или нет.
Под одинаковыми объектами понимаются два объекта, у которых одинаковый набор пар "ключ-значение".

Гарантируется, что значениями полей могут быть только примитивы!
Сравнивать вложенные внутрь массивы или объекты не нужно! (Напр { a: [ { c: 10} ] })

Привязываться к конкретным полям и сравнивать их запрещено!
То есть хардкодить сравнение if (object[1].name !== object[2].name) { false } запрещено!
Ваша программа должна уметь работать с различными объектами.

Напишите вашу программу, которая будет сравнивать 2 объекта из переменных object1 и object2.
Выводить результат можете любым образом.
Самостоятельно проверьте работоспособность вашей программы с разными тест-кейсами.
Просто меняйте значения переменных object1 и object2 из тест-кейсов ниже.
Ваша программа должна выдать такой же результат, который указан в ожидаемом.

--- Рекомендация ---
Для решения данной задачи достаточно использовать циклы, сравнения и операции с объектами.
Никаких сложных или ещё не изученных операций здесь не требуется!

--- Тест-кейс 1 ---
const object1 = { name: 'n', age: 10 };
const object2 = { age: 10, name: 'n' };
Ожидаемый результат: true


--- Тест-кейс 2 ---
const object1 = { name: 'n', size: 3 };
const object2 = { size: 3 };
Ожидаемый результат: false

--- Тест-кейс 3 ---
const object1 = {};
const object2 = {};
Ожидаемый результат: true

--- Тест-кейс 4 ---
const object1 = { isAdult: true, email: 'example@mail.com', page: 100 };
const object2 = { page: 100, isAdult: true, email: 'example@mail.com' };
Ожидаемый результат: true

--- Тест-кейс 5 ---
const object1 = { checked: 1 };
const object2 = { checked: true };
Ожидаемый результат: false

--- Тест-кейс 6 ---
const object1 = { checked: true };
const object2 = { checked: true, marked: true };
Ожидаемый результат: false

--- Тест-кейс 7 ---
const object1 = { checked: true, marked: true };
const object2 = { checked: true };
Ожидаемый результат: false

--- Тест-кейс 8 ---
const object1 = {};
const object2 = object1;
object2.age = 100;
Ожидаемый результат: true


--- Небольшая помощь ---
Вы можете скопировать сразу все переменные, и просто постоянно комментировать/раскомментировать их,
чтобы запускать программу с разными значениями.
Все переменные одним списком:

const object1 = { name: 'n', age: 10 };
const object2 = { age: 10, name: 'n' };

const object1 = { name: 'n', size: 3 };
const object2 = { size: 3 };

const object1 = {};
const object2 = {};

const object1 = { isAdult: true, email: 'example@mail.com', page: 100 };
const object2 = { page: 100, isAdult: true, email: 'example@mail.com' };

const object1 = { checked: 1 };
const object2 = { checked: true };
 */

const object1 = {};
const object2 = {};


// сортирует массив
const sorted = (arr) => {
    return   arr.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
}
//

let comparingArrays = (object1, object2) => {

let check = false;

    let keys1 = Object.keys(object1) ;
    let keys2 = Object.keys(object2);
    let values1 = Object.values(object1);
    let values2 = Object.values(object2);

    let sortArray1key = sorted(keys1);
    let sortArray2key = sorted(keys2);
    let sortArray1value = sorted(values1);
    let sortArray2value = sorted(values2);


    if (sortArray1key.length === sortArray2key.length) {
        check = true;
    }

if (check) {
    for (let i = 0; i < sortArray1key.length; i++) {
        if (sortArray1key[i] === sortArray2key[i]) {
            check = true;
        }
    }
}


    if (check) {
        // проводим проверку по значениям
        for (let i = 0; i < sortArray1value.length; i++) {
            if (String(sortArray1value[i]) === String(sortArray2value[i])) {
                check = true;
            }
        }
    }


 return check;

}

console.log(comparingArrays(object1, object2));






