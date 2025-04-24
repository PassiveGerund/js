// Сортировка
// Создайте функцию, которая принимает на вход массив объектов типа User,
// ключ для сортировки, и опционально направление сортировки - asc (по возрастанию) или desc (по убыванию)
// и Важно! возвращает новый отсортированный массив (а не меняет первоначальный), согласно требуемой сортировке.
// // Доработайте код ниже, чтобы он работал как ожидается.
// // В sortedByIdAsc, sortedByNameDesc, sortedByAgeDesc лежат новые отсортированные массивы.
// В users данные какие были в начале, такие и остались в конце, они не трогались.

const sort = (array: [], key, direction) => {
  const sortedusers = array.slice();
  // users.sort((a: Person, b: Person) => (a.age < b.age ? -1 : 1));
  if (direction === undefined || direction === 'asc') {
    sortedusers.sort((begin, end) => begin[key] - end[key]);
  } else if (direction === 'desc') {
    sortedusers.sort((begin, end) => end[key] - begin[key]);
  }
  return sortedusers;
};

type User = { id: number; age: number; name: string };

const users: User[] = [
  { id: 1, age: 10, name: 'zxc' },
  { id: 3, age: 20, name: 'juk' },
  { id: 6, age: 2, name: 'aa' },
  { id: 9, age: 1, name: 'ab' },
  { id: 2, age: 5, name: 'zz' },
];

const sortedByIdDesc = sort(users, 'id', 'desc');
// console.log(sortedByIdDesc);
// console.log(users);
