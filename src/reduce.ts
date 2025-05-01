const deduplicate = (word) => {
  word = word.split('');
  const arr = [];
  word.reduce((cur: number, letter: number) => {
    if (!arr.includes(letter)) {
      arr.push(letter);
    }
  }, []);

  return arr.join('');
};

const result = deduplicate('bookkeeperrr');
// console.log(result); // bokeper
// ---
// -- Баланс
const calculateBalanceForUser = (user: User): number => {
  let finalBalance = user.startBalance;
  user.transactions.reduce((cur: number, idx: number) => {
    finalBalance += idx.diff;
  }, []);
  return finalBalance;
};

type Transaction = {
  id: number;
  diff: number;
};

type User = {
  id: number;
  name: string;
  startBalance: number;
  transactions: Transaction[];
};

const alexander: User = {
  id: 37,
  name: 'AleX',
  startBalance: 0,
  transactions: [
    { id: 8, diff: 100 },
    { id: 30, diff: -50 },
    { id: 23, diff: 250 },
  ],
};

const max: User = {
  id: 40,
  name: 'MaX',
  startBalance: -3,
  transactions: [
    { id: 4, diff: 9 },
    { id: 5, diff: -18 },
    { id: 5, diff: 3 },
  ],
};

// const alexanderBalance = calculateBalanceForUser(alexander); // Его история операция: 0 + 100 - 50 + 250
// console.log(alexanderBalance); // 300
//
// const maxBalance = calculateBalanceForUser(max); // Его история операция: -3 + 9 - 18 + 3
// console.log(maxBalance); // -9

// reduce. Оценки
const values = [
  [1, 100],
  [2, 200],
  [3, 300],
  [1, 2],
  [3, 400],
  [4, 500],
  [1, 99],
];
const arr = {};
const arrcur = [];

const indexfirst = 1;
let indexrepeat = 0;
let index = 0;

let summfirst = 0;
let summrepeat = 0;
let summ = 0;

const estimTable = values.reduce((cur, idx) => {
  const currentIndex = idx[0];

  if (arrcur.includes(currentIndex)) {
    // count повторяется:

    indexrepeat = indexfirst + indexrepeat;
    index = indexrepeat;

    summrepeat = summrepeat + summfirst; // 201
    summ = summrepeat;
  } else {
    arrcur.push(currentIndex);
    index = indexfirst;
    summfirst = idx[1]; // 100
    summ = summfirst; // 100
  }

  return (arr[currentIndex] = {
    count: index,
    sum: summ,
  });
}, []);

// console.log(estimTable);
console.log(arr);

/*
{
  '1': { count: 3, sum: 201 },
  '2': { count: 1, sum: 200 },
  '3': { count: 2, sum: 700 },
  '4': { count: 1, sum: 500 }
}






Надо посчитать сколько раз мы встречаем count и когда мы его встречаем складывать sum

 */
