// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


let time = +prompt('Please type number for 0 to 59');

if (time >= 0 && time <= 15) {
    console.log(' 1 частина');
} else if (time >= 15 && time <= 30) {
    console.log('2 частина');
} else if (time >= 30 && time <= 45) {
    console.log('3 частина');
} else if (time >= 45 && time <= 59) {
    console.log('4 частина');
}


// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


let day = 30;

if (day >= 1 && day <= 11) {
    console.log(' 1 dekata');
} else if (day >= 11 && day <= 21) {
    console.log(' 2 dekata');
} else if (day >= 21 && day <= 31) {
    console.log(' 3 dekata');
}


// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false.
// Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = 111;
if (!test) {
    console.log('Done');
} else if (test) {
    console.log('Fail');
}

// if (test !== true) {
//     console.log('Correct');
// } else {
//     console.log('Wrong')
// }


let test1 = false;

let test2 = test1 !== true ? 'Вірно' : 'Неправильно';
console.log(test2);




// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = 1;

if (a !== 0) {
    console.log('true');
} else if (a === 0) {
    console.log('false');
} else if (a === 1) {
    console.log('true')
} else if (a === -3) {
    console.log('true')
}


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.


let week = 7;

switch (week) {
    case (1):
        console.log('today you have to go swimming');
        break;
    case (2):
        console.log('today english lessons');
        break;
    case (3):
        console.log('today you have to go gim');
        break;
    case (4):
        console.log('today you have js lesson');
        break;
    case (5):
        console.log('today you have practice js');
        break;
    case (6):
        console.log('today english lessons');
        break;
    case (7):
        console.log('congratulation today rest');
        break;
    default:
        console.log('this number is not true days of week');
}


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4. - не діляться бо 366 днів, а 364


let year = 366;

let result = (year / 4);
if (result === 91.25) {

    console.log(`${result} ${'this year is not leap year'}`); // 365 - not leap year
}
if (result === 91.5) {
    console.log(`${result} ${'this year is  leap year'}`); // 366 - leap year
}


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let name = prompt('Яка «офіційна» назва JavaScript?');

if (name === 'ECMAScript') {
    console.log('Правильно!');
} else {
    console.log('Не знаєте? ECMAScript!')
}