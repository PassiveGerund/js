
// Дан массив чисел, необходимо округлить каждое положительное число в нем, кроме последних трех положительных чисел.

let init = [1.1 , 2.2, -2, 3.3, -1, 5.5, 5.99, 7.49, 7.9999, -2.2];

for (let i = 0; i < init.length-3; i++) {
   init[i] = Math.round(init[i]);

}

// console.log(init);
// console.log([1, 2, -2, 3, -1, 6, 5.99, 7.49, 7.9999, -2.2]);


// ### Вывести вторую половину
//
// Дан массив строк. Вывести только вторую половину массива (если длина не делится нацело на 2,
// округляем вниз, для массива из 5 элементов второй половиной будет третий, четвертый и пятый элементы).

let array = ["one", "two", "three", "four", "five", "six", "seven" ];
let newArray = [];

let cutter = Math.floor(array.length/2); //2
// console.log(cutter);

// надо удалить все элементы индексы которых меньше cutter

// for (let i = 0; i < array.length; i++) {
//    if(i>=cutter) {
//        newArray.push(array[i]);
//    }
// }
// console.log(newArray);


//Нарисуйте в консоли такую ёлочку, используя цикл
function drawChristmasTree(height) {
    for (let i = 0; i < height; i++) {
        let spaces = '_'.repeat(height - i - 1); //5-0-1 = 4 //5-1-1=3 // 5-2-1=2
        let stars = '*'.repeat(2 * i + 1); // 0+1 = 1  // 2+1 = 3 // 4+1 = 5
        console.log(spaces + stars);
    }
}
// drawChristmasTree(5);
// т.е. у меня отсутствует та часть мозга которая может представить эту елочку так как в решении решение из chat gpt)

//### Вывод матрицы
// Используя вложенный цикл, выведите матрицу в виде таблицы.
// В качестве соединителей используйте управляющий символ `\t`.

const matrix = [
    ['Id', 'Title', 'Description'],
    [1, 'Title-1', 'Description-1'],
    [2, 'Title-2', 'Description-2'],
    [3, 'Title-3', 'Description-3', 'Поле с багом'],
    [4, 'Title-4', 'Description-4'],
    [5, 'Title-5', 'Description-5'],
    [6, 'Title-6', 'Description-6', 'Поле с багом'],
];

matrix.forEach(function (item) {
        console.log(item.join('\t'));
}
);

//### Картофель
// Выполните задание


const potatoes = [
    { weight: 691, variety: 'Russet Burbank' },
    { weight: 624, variety: 'Russet Burbank' },
    { weight: 538, variety: 'Yukon Gold' },
    { weight: 428, variety: 'Russet Burbank' },
    { weight: 281, variety: 'Yukon Gold' },
];
const targetWeight = 1500;

// ... Ваш код здесь ...

console.log(
    `
Общий вес: ${resultSum}
Отклонение: ${resultDifference}
Превалирующий сорт: ${resultVariety}
Выбранный картофель:`,
    resultPotatoes,
);

/* ОЖИДАЕМЫЙ ВЫВОД
Общий вес: 1510
Отклонение: 10
Превалирующий сорт: Yukon Gold
Выбранный картофель: [
  { weight: 691, variety: 'Russet Burbank' },
  { weight: 538, variety: 'Yukon Gold' },
  { weight: 281, variety: 'Yukon Gold' }
]
 */