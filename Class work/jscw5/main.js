// Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let num1 = +prompt("Please type number from 0 to 100");
// let num2 = +prompt("Please type number from 0 to 100");
// let num3 = +prompt("Please type number from 0 to 100");
//
// let minNum = (num1, num2, num3) => {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1);
//     } else if (num2 < num1 && num2 < num3) {
//         console.log(num2);
//     } else if (num3 < num1 && num3 < num2) {
//         console.log(num3);
//     }
// };
// minNum(num1, num2, num3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let num1 = +prompt('Please type number from 0 to 100');
// let num2 = +prompt('Please type number from 0 to 100');
// let num3 = +prompt('Please type number from 0 to 100');
//
// let maxNum = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1);
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(num2);
//     } else if (num3 > num1 && num3 > num1) {
//         console.log(num3);
//     }
// };
//
// maxNum(num1, num2, num3);

// - створити функцію яка повертає найбільше число з масиву

// let maxNumbers = (arr) => Math.max.apply(null, arr);
//
// let arrayMaxNum = maxNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(arrayMaxNum);

// - створити функцію яка повертає найменьше число з масиву

// let minNumbers = (arr) => Math.min.apply(null, arr);
//
// let arrayMinNumbers = minNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(arrayMinNumbers);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arraySumNumbers = (numbers) => {
//     let result = 0;
//     for (const number of numbers) {
//         result += number;
//     }
//     return result;
// };
//
// let arrNum = arraySumNumbers([2, 22, 56, 78, 27, 88, 90, 21, 17, 67]);
// console.log(arrNum);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let average = (array) => {
//     let result = 0;
//     for (let i = 0; i < array.length; i++) {
//         result += array[i];
//     }
//     return result / array.length;
// };
//
// let number = average([2, 22, 56, 78, 27, 88, 90, 21, 17, 67]);
// console.log(number);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

// let minMaxArrayNum = (array) => {
//     let min = array[0];
//     let max = array[0];
//     for (const num of array) {
//         if (num > max) {
//             max = num
//         }
//
//         if (num < min) {
//             min = num
//         }
//     }
//     console.log(min);
//     console.log(max);
//     return min;
// };
//
// minMaxArrayNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let randomizer = (numberElement) => {
//     let randomArr = [];
//     for (let i = 0; i < numberElement; i++) {
//         let random = Math.round(Math.random()*100);
//         randomArr.push(random);
//     }
//     return randomArr;
// };
//
// let randomArr = randomizer(10);
// console.log(randomArr);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.

// let randomizer1 = (numberElement, limit) => {
//     let randomArr1 = [];
//     for (let i = 0; i < numberElement; i++) {
//         let random1 = Math.round(Math.random()*limit);
//         randomArr1.push(random1);
//     }
//     return randomArr1;
// };
//
// let randomArr1 = randomizer1(10, 1000);
// console.log(randomArr1);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let reverseArr = (arr) => {
//     let newArr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = arr[i];
//     }
//     return newArr;
// };
//
// console.log(reverseArr([1, 2, 3,]));