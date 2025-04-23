// console.log(isPalindrome(palindrom));

import { green, red } from 'chalk';

const palindrom = '1214';

const isPalindrome = (palindrom) => {
  const reverse = palindrom.split('').reverse();
  const array = palindrom.split('');

  if (array.toString() === reverse.toString()) {
    return true;
  }
  return false;
};

const tests = [
  ['топот', true],
  ['пот', false],
  ['потоп', true],
  ['кабак', true],
  ['(())', false],
  ['табат', true],
  ['abab', false],
  ['топпот', true],
  ['()()', false],
  ['', true],
  ['123321', true],
  ['())(', true],
  ['abba', true],
  ['а роза упала на лапу азора', false], // Пробелы не совпадают!
] as const;

for (const test of tests) {
  const [word, expected] = test;

  const result = isPalindrome(word);
  if (result !== expected) {
    console.log(red(`Для слова "${word}" тест не прошел. Ожидалось: ${expected} | Получено: ${result}`));
    continue;
  }

  console.log(green(`Слово "${word}" успешно. Результат: ${result}`));
}
