// берется команда  игроков
const players = ['Alexey', 'Bob', 'Charlie', 'Dong', 'Emaar', 'Fox', 'Ginger', 'Hato'];

// и варианты подброса монетки
const variants = ['Орёл', 'Решка'];

// добавляются в массивы исходя из результата игры
const winners = [];
const losers = [];

// цикл проходит по каждому игроку
while (players.length) {
    // добавляется игрок из команды игроков
    const player = players.pop();

    // игрок подкидывает монетку
    const playerChoose = variants[Math.floor(Math.random() * variants.length)];

    // игра подкидиывает монетку
    const gameRandom = variants[Math.floor(Math.random() * variants.length)];

    // сравниваются результаты
    if (playerChoose === gameRandom) {
        // если совпали
        winners.push(player);
    } else {

        // если не совпали
        losers.push(player);
    }
}

console.log(winners);
console.log(losers);
