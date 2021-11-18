// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.

// let num1 = 22;
//
// let num2 = 22;
//
// if (num1 <= 0 || num2 <= 0) {
//     throw new Error('Numbers should be more than 0');
// }
//
// if (num1 === num2) {
//     console.log(`These numbers are equal and equal to - ${num1}`);
// } else if (num1 !== num2) {
//     console.log(`Max number is - ${Math.max(num1, num2)}`);
// }


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.


// 1 під: 1 - 20 квартир
// 2 під: 21 - 48 квартир
// 3 під: 49 - 90 квартир

// const flatNumber = +prompt('Please type your flat number');
//
// if (flatNumber >= 1 && flatNumber <= 20) {
//     console.log('firstEntrance');
// } if (flatNumber >= 21 && flatNumber <= 48) {
//     console.log('secondEntrance');
// } if (flatNumber >= 49 && flatNumber <= 90) {
//     console.log('thirdEntrance');
// }


// - Ми маємо змінну number в яку користувач задає числове значення,
//   якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt('please type number for 1 to 10');
//
// if (number === 10) {
//     console.log('true')
// } else if (number !== 10) {
//     console.log('false')
// }


// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else


let x = [];

// if (typeof x === 'number') {
//     console.log('1 -number')
// } else if (typeof x === "string") {
//     console.log('2 - string')
// } else if (typeof x === 'boolean') {
//     console.log('3 - boolean')
// } else if (typeof x === 'object') {
//     console.log('4 - object')
// } else {
//     console.log('what ???')
// }

// ДРУГИЙ ВАРІАНТ ВИРІШЕННЯ ЗАВДАННЯ !!!!!!!!!!

// switch (typeof x) {
//
//     case 'number' :
//         console.log('1 - number');
//         break;
//     case 'string':
//         console.log('2 - string');
//         break;
//     case 'boolean':
//         console.log('3 - boolean');
//         break;
//     case 'object':
//         console.log('4 - object');
//         break;
//     default:
//         console.log('what ???');
// }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//  Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//  Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temp = +prompt('Please type today air temperature');
// if (temp >= 10 || temp >= 22) {
//     console.log('We must go to Okten')
// } else if (temp <= 10) {
//     console.log('We must stay in home')
// }


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д )
//     і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .


let lotto = 1;
switch (lotto) {
    case 1:
        console.log('You won Auto');
        break;
    case 2:
        console.log('You won Moto');
        break;
    case 3:
        console.log('You won Phone');
        break;
    case 4:
        console.log('You won 5000 $');
        break;
    case 5:
        console.log('You won 1000$');
        break;
    default:
        console.log('This number is not true')
}