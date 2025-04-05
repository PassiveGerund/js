// ### Мин, макс, среднее
// Дан массив из чисел.
//     Необходимо найти среди этих чисел:
//     - Минимальное
//     - Максимальное
//     - Среднее между всеми значениями
// let arr = [0,1,3,4,5,10];
//
// let min = arr[0];
// let max = arr[0];
// for(el of arr) {
//     // console.log(el);
//     if (min > el) {
//         min = el;
//     }
//     else if (max < el) {
//         max = el;  }
// }
// let middle = (min + max)/2;
// console.log(min, max, middle);

// ### Гласные буквы
// Дано слово, подсчитайте количество гласных и негласных букв в этом слове.
// Негласными считаются все буквы, которых нет в этом массиве:
// let word = "абуж";
// const vowels = ['а', "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
// let CountVowels = 0;
// let CountСonsonant  = 0;
//
// for (letter of word) {
//     if (vowels.includes(letter) ) {
//         CountVowels += 1;
//     } else {
//         CountСonsonant += CountСonsonant + 1;
//     }
// }
// // console.log(CountVowels, CountСonsonant);

// //Сравнение массивов
// // Напишите программу, которая сравнивает 2 массива и выводит true, если в них лежат одни и те же значения (даже если в разном порядке), а в ином случае false.
// const names1 = ['Ivan', 'Kovan'];
// const names2 = ['Kovan', 'Ivan'];
// // true, так как значения "одинаковые"
//
// const names3 = ['A'];
// const names4 = ['A', 'B'];
// // false, так как элемент B есть в names4, но нет в names3
//
// const names5 = ['C', 1, false];
// const names6 = [false, 1, 'C'];
// // true, так как одни и те же элементы
//
// const names7 = [null, 0, 'D'];
// const names8 = ['D', null];
// // false, в names7 есть 0, но нет в names8
//
// const names9 = [];
// const names10 = [];
// // true, оба массива пустые
//
// const names11 = ['0'];
// const names12 = [0];
// // false
//
// checkArr = (arr1, arr2) =>  {
//     for (el of arr1) {
//         if (arr2.includes(el)) {
//                 for (el of arr2) {
//                 if (!arr1.includes(el)) {
//                     return false;
//                  }
//         }
//         } else {
//             return false;
//         }
// }
//     return true;
// }
// console.log(checkArr(names11, names12));


// Возраст
/*
Дан массив из 10 объектов с пользователями.
У каждого пользователя есть имя и возраст.
Подсчитайте и выведите количество различных возрастов.
Вы должны повторить такой вывод:
Возраст=25. Количество людей=3
Возраст=28. Количество людей=2
Возраст=30. Количество людей=3
Возраст=35. Количество людей=1
Возраст=41. Количество людей=1

Для решений используйте один цикл for of, чтобы подсчитать количество каждого возраста и записать это в counter.
Для вывода используйте один цикл for in, чтобы вывести все данные из counter.
 */

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Diana', age: 35 },
    { name: 'Eve', age: 30 },
    { name: 'Frank', age: 28 },
    { name: 'Grace', age: 25 },
    { name: 'Hannah', age: 41 },
    { name: 'Ivy', age: 30 },
    { name: 'Jack', age: 28 },
];

const counter = {};
// Ваш код здесь ...

