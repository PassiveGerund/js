//### Картофель
// Выполните задание

const potatoes = [
    { weight: 1, variety: 'Russet Burbank' },
    { weight: 2, variety: 'Russet Burbank' },
    { weight: 3, variety: 'Yukon Gold' }
    // { weight: 4, variety: 'Russet Burbank' },
    // { weight: 6, variety: 'Yukon Gold' },
];
const targetWeight = 1500;

let setOfPotatoes = potatoes[0].weight;

for (key in potatoes) {
    console.log(potatoes[key]); // выводит массивы

    for (let j = 1; j < potatoes.length; j++) {
        setOfPotatoes = setOfPotatoes + potatoes[key].weight;
    }
}
console.log(setOfPotatoes);





// console.log(
//     `
// Общий вес: ${resultSum}
// Отклонение: ${resultDifference}
// Превалирующий сорт: ${resultVariety}
// Выбранный картофель:`,
//     resultPotatoes,
// );

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


//const size = potatoes.length;
// const varieties = [];
// let resultSum = null;
// let resultPotatoes = [];
// let resultDifference = null;
// let resultVariety = null;
//
// /* Решение
// Для каждого вложенного цикла используем текущий индекс верхнего цикла, в таком случае,
// если первый цикл взял 1ую картошку, то второй цикл возьмёт 2ую картошку, а третий цикл возьмёт 3ю картошку,
// и таким образом нам не нужно руками контролировать, чтобы в каждую переменную записалась разная картошка.
//  */
// for (let idx1 = 0; idx1 < size; idx1++) {
//   const potato1 = potatoes[idx1];
//
//   for (let idx2 = idx1 + 1; idx2 < size; idx2++) {
//     const potato2 = potatoes[idx2];
//
//     for (let idx3 = idx2 + 1; idx3 < size; idx3++) {
//       const potato3 = potatoes[idx3];
//
//       // Вес для этих 3х картошек
//       const sum = potato1.weight + potato2.weight + potato3.weight;
//
//       // Точность для этих 3х картошек
//       const difference = Math.abs(sum - targetWeight);
//
//       // Если результата ещё нет, или погрешность этих 3х картошек меньше запомненной - обновляем запомненные данные
//       if (resultDifference === null || difference < resultDifference) {
//         resultSum = sum;
//         resultDifference = difference;
//         resultPotatoes = [potato1, potato2, potato3];
//       }
//     }
//   }
// }
//
// // Перебираем выбранные картошки и ищем превалирующий сорт
// for (let i = 0; i < resultPotatoes.length; i++) {
//   const variety = potatoes[i].variety;
//
//   if (varieties.includes(variety)) {
//     // В массиве уже есть одна картошка такого сорта, значит эта вторая, значит этот сорт "победил"
//     resultVariety = variety;
//     break;
//   }
//
//   varieties.push(variety);
// }