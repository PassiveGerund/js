//Площадь квадрата
let a = Math.round(Math.random() * 10);
console.log(`Площадь квадрата со стороной a=${a} равна ${a*a}`);

// Площадь круга
let r = 10;
let digits = 3.1415926535 * (r*r);
console.log(`Радиус: ${r}
Площадь: ${ Math.round(digits * 100) / 100 }
`);

//Количество парт
let classes = 13;
let studenst = 7 ;
let parts = Math.round(studenst / 2)*classes;

console.log(`
Классов: ${ classes}
Учеников: ${ studenst}
Нужно купить парт: ${parts}
 `);

//Деление яблок
let apples = 10;
let people = 3 ;
let result = Math.round(apples / people);
let rest = apples - (result * people);

console.log(`
Яблок: ${apples}
Человек: ${people}
Каждый человек получит по ${result} яблока
Останется ${rest} яблоко
 `);


let min = Math.ceil(0);
let max = Math.floor(300);
let randomdigit = Math.floor(Math.random() * (max - min)) + min;
console.log(randomdigit);

//Рандомное вещественное число с точностью 2 знака после запятой) в промежутке от 98 до 102
let digitsec = (Math.random() * (max - min) + min);
let randomdigitSecond = Math.round(digitsec * 100) / 100
console.log(randomdigitSecond);

/*
 * - Рандомное вещественное число с точностью 6 знаков после запятой, в промежутке от -300 до +300,
 * при этом целая часть числа должна быть кратна 10 (Например -290.536748, -20.759206, 110.463069 и тому подобные)
 */


//++i и i++
let i = 0;

console.log('1:', i); //0

console.log('2:', i++); // 0
console.log('3:', i);  // 1

console.log('4:', ++i);  //2
console.log('5:', i);  //2

console.log('6:', i--); //2
console.log('7:', i); //1

console.log('8:', --i);  //0
console.log('9:', i); //0
