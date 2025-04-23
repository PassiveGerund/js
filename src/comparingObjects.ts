// const object1 = undefined;
// const object2 = null;
const compareObjectsRecursive = (obj1: any, obj2: any): boolean => {
  if (obj1 === null || obj2 === null || obj1 === undefined || obj2 === undefined) {
    if (obj1 === obj2) {
      return true;
    }
    return false;
  }

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    if (obj1.toString() === obj2.toString()) {
      return true;
    }
    return false;
  }

  if (Object.keys(obj1).toString() !== Object.keys(obj2).toString()) {
    return false;
  }

  if (Object.values(obj1).toString() !== Object.values(obj2).toString()) {
    return false;
  }

  for (const value1 of Object.values(obj1)) {
    // проверяем все значения массива1
    if (typeof value1 === 'object') {
      // если находим объект

      for (const value2 of Object.values(obj2)) {
        // проверяем все значения массива 2
        if (typeof value2 === 'object') {
          // если находим объект в массиве 2
          return compareObjectsRecursive(value1, value2); // снова сравниваем эти массивы
        }
      }
    }
  }

  return true;
};

// console.log(compareObjectsRecursive(object1, object2));
const object1 = { a: 10, b: { c: { d: { e: [1, true, { g: { a: [1] } }] } } } };

const testCases: [any, any, boolean][] = [
  // Примитивы
  [1, 0, false],
  [false, false, true],
  [1, true, false],
  [null, null, true],
  [undefined, undefined, true],
  [undefined, null, false],
  ['', '', true],
  ['abc', 'ABC', false],

  // Массивы
  [[1, 2, 3], [1, 2, 3], true],
  [[3, 2, 1], [1, 2, 3], false],
  [[], [], true],
  [[[[1, [2, [3]]]]], [[[1, [2, [3]]]]], true],
  [[[[false, [], [], [[[true]]]]]], [[[false, [], [], [[[true]]]]]], true],
  [[], [undefined], false],

  // Объекты
  [{}, {}, true],
  [{ a: 10, b: '' }, { a: 10, b: '' }, true],
  [{ a: [2, 1] }, { a: [1, 2] }, false],
  [object1, object1, true],
  [{ x: [{ x: [{ x: [{ x: 'X' }] }] }] }, { x: [{ x: [{ x: [{ x: 'X' }] }] }] }, true],
  [{ x: [{ x: [{ x: [{ x: 'X' }] }] }] }, { x: [{ x: [{ x: [{ x: 'x' }] }] }] }, false],
];

for (const test of testCases) {
  const [obj1, obj2, expected] = test;
  const result = compareObjectsRecursive(obj1, obj2);

  const words = [
    result === expected ? `Корректно (${result})` : `ОШИБКА - (Ожидалось ${expected} , фактически - ${result})`,
    '-',
    JSON.stringify(obj1),
    '|',
    JSON.stringify(obj2),
  ];

  console.log(words.join('\t'));
}
