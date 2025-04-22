const testCases = [
  [
    { name: 'День рождения.mp4', size: 1, units: 'gb' },
    { speedPerSecond: 100, units: 'kb' },
    'Дни: 0. Часы: 2. Минуты: 46. Секунды: 40.',
  ],
  [
    { name: 'Отчёт.docx', size: 1023443, units: 'kb' },
    { speedPerSecond: 1, units: 'mb' },
    'Дни: 0. Часы: 0. Минуты: 17. Секунды: 4.',
  ],
  [
    { name: 'Голосовое сообщение.mp3', size: 1, units: 'b' },
    { speedPerSecond: 1000, units: 'gb' },
    'Дни: 0. Часы: 0. Минуты: 0. Секунды: 1.',
  ],
  [
    { name: 'Корги.png', size: 100.45, units: 'mb' },
    { speedPerSecond: 1162.6, units: 'b' },
    'Дни: 1. Часы: 0. Минуты: 0. Секунды: 2.',
  ],
  [
    { name: 'GTA V', size: 100.45, units: 'gb' },
    { speedPerSecond: 1, units: 'b' },
    'Дни: 1162615. Часы: 17. Минуты: 46. Секунды: 40.',
  ],
] as const;

// переводим вес в байты
const weightofbites = (file) => {
  if (file.units === 'kb') {
    file.size = file.size * 1000;
  }
  if (file.units === 'mb') {
    file.size = file.size * 1000 * 1000;
    // console.log(file.size);
  }

  if (file.units === 'gb') {
    file.size = file.size * 1000 * 1000 * 1000;
    // console.log(file.size);
  }
  return file.size;
};

// переводим скорость в байты
const weightofspeed = (speed) => {
  if (speed.units === 'kb') {
    speed.speedPerSecond = speed.speedPerSecond * 1000;
  }
  if (speed.units === 'mb') {
    speed.speedPerSecond = speed.speedPerSecond * 1000 * 1000;
  }

  if (speed.units === 'gb') {
    speed.speedPerSecond = speed.speedPerSecond * 1000 * 1000 * 1000;
  }
  return speed.speedPerSecond;
};

// переводим секунды в дни / часы / минуты
const convertertime = (seconds) => {
  let days = 0;
  let hours = 0;
  let minutes = 0;

  if (seconds > 60) {
    minutes = Math.floor(seconds / 60);
  }
  if (seconds > 3600) {
    hours = Math.floor(seconds / 3600);
  }
  if (seconds > 86400) {
    days = Math.floor(seconds / 86400);
  }
  hours = Math.floor(hours % 24);
  minutes = Math.floor(minutes % 60);
  seconds = Math.floor(seconds % 60);

  return `Дни: ${days}. Часы: ${hours}. Минуты: ${minutes}. Секунды: ${seconds}.`;
};

function downloadTimeCalculator(file, speed) {
  return convertertime(Math.ceil(weightofbites(file) / weightofspeed(speed))); // это результат в секундах
}

/**
 * Цикл для проверки каждого тест-кейса по очереди
 */
for (const testCase of testCases) {
  const file = testCase[0];
  const speed = testCase[1];
  const expected = testCase[2];

  const result = downloadTimeCalculator(file, speed);

  if (result === expected) {
    console.log(`Расчеты верны для файла "${file.name}"!`);
  } else {
    console.log(`Расчеты НЕВЕРНЫ для файла "${file.name}"!`);
  }
}
