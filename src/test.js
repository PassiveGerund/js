//Рандомный генератор
/*
 * - Рандомное целое число в промежутке от -100 до 100.
 * - Рандомное целое число в промежутке от 200 до 1200, кратное 100 (например 200, 300, 900, 1200 или другое)
 */
//
function getRandomNumber(min, max) {
    min = min / 10;
    max = max / 10;
let randomdigit = Math.floor(Math.random() * (max - min)) + min;
     // Генерируем случайную дробную часть с 6 знаками после запятой.
    let fractionalPart = Math.random();  // Случайное число от 0 до 1
    // Округляем до 6 знаков после запятой и убираем целую часть (если вдруг появилась).
    fractionalPart = Math.round(fractionalPart * 1000000) / 1000000;
 //если ниже 0 то надо убавлять fractional
    if (randomdigit > 0) {
        return randomdigit * 10 + fractionalPart ;
    }
    else {

    return randomdigit * 10 - fractionalPart ;
    }
}

console.log(getRandomNumber(-300, 300));
// getRandomNumber(-300, 300)
