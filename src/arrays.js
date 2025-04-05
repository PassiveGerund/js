const array = [1, 33, -10, 'example', 'word'];

/* Результат:
1_33_-10_example_word
*/
//console.log(array.join('_'));

// история никнеймов
// const user = {
//     name: 'Alex',
//     nickname: 'Alexxx675',
//     nicknameHistory: ['AlexLuk', 'Xela-123', 'Sasha 8'],
// };
//
// user.nicknameHistory.push(user.nickname);
// console.log(user.nicknameHistory);
// user.nickname = "New";
// console.log(user.nickname);

const array1 = [null, undefined, '', '', NaN, 1, -16, true, false];
const array2 = [];

const ruslan = 'Ruslan-2';
const age = 100;
const array3 = [ruslan, array2, { length: 777 }, 'some string', -500 / 100, age * 10, [1], array1];

const matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9, 10] ];

console.log('--- Группа 1 ---');
console.log(array3[4] * array3[5]);
console.log([1, 2, 3][2]);

console.log('--- Группа 2 ---');
console.log(array3.length); //8
console.log(array3[array3.length - 1].length); // 9
console.log(array3[2].length); //1
console.log(array3[array3.length -1].length * array3[4] - array3[5] / ruslan.length);  // 9 - 1000 / 8
console.log((array3[7][6] + 6) * age - array2.length + array3[3].length * matrix[2][3]);

console.log('--- Группа 3 ---');
console.log([6, 3, 9][2]);
console.log(matrix[1]);
console.log(matrix[1][1]);
console.log(matrix[0][0] * matrix[2][3]);
console.log([ [8, 3], [2, 6] ][0][1]);

console.log('--- Группа 4 ---');
const m =[[[[777]], 555], 666];
console.log(m[0][0][0][0]);
console.log(m[1]);
console.log(m[0][1]);
