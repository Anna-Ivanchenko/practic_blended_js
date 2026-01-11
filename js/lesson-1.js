// !ННННННННННННННННННННННННННННННННННННН
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = prompt("Введіть число")
// console.log('number: ', number);

// if (number === 10) {
//     alert('Вірно')
// } else {
//     alert('Невірно')
// }
// !НННННННННННННННННННННННННННННННННННННННННН

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * 59);

// function getQuarter(min) {
//     if (min >= 0 && min <= 15) {
//         return 'першу';
//     } else if (min > 15 && min <= 30) {
//         return 'другу';
//     } else if (min > 30 && min <= 45) {
//         return 'третю';
//     } else if (min > 45 && min <= 60) {
//         return 'четверту';
//     } else {
//         return 'некоректне значення';
//     }
// }
// const min = Math.floor(Math.random() * 60);
// const quarter = getQuarter(min);

// alert(`${min} входить в ${quarter} чверть`);

// !WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// function getSeason(num) {
//   let result;

//   switch (num) {
//     case '1':
//       result = 'зима';
//       break;
//     case '2':
//       result = 'весна';
//       break;
//     case '3':
//       result = 'літо';
//       break;
//     case '4':
//       result = 'осінь';
//       break;
//     default:
//       result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
//   }

//   return result;
// }

// const textUser = prompt('Введіть число від 1 до 4');
// const season = getSeason(textUser);

// console.log(season);
// !ЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦЦ

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

function time() {
  const minutes = Number(prompt('Введіть кількість хвилин'));

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  const fHours = String(hours).padStart(2, '0');
  const fMinutes = String(mins).padStart(2, '0');

  console.log(fHours + ':' + fMinutes);
}

time();