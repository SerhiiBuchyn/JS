// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!) ************

// let num1 = +prompt('please type number from 0 to 100');
// let num2 = +prompt('please type number from 0 to 100');
// let num3 = +prompt('please type number from 0 to 100');
//
// function minNumber(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1);
//     } else if (num2 < num1 && num2 < num3) {
//         console.log(num2);
//     } else if (num3 < num1 && num3 < num2) {
//         console.log(num3);
//     }
// }
//
// minNumber(num1, num2, num3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!) ***********

// let num4 = +prompt('please type number from 0 to 100');
// let num5 = +prompt('please type number from 0 to 100');
// let num6 = +prompt('please type number from 0 to 100');
//
// function maxNumber(num4, num5, num6) {
//     if (num4 > num5 && num4 > num6) {
//         console.log(num4);
//     } else if (num5 > num4 && num5 > num6) {
//         console.log(num5);
//     } else if (num6 > num4 && num6 > num5) {
//         console.log(num6);
//     }
// }
//
// maxNumber(num4, num5, num6);

// - створити функцію яка повертає найбільше число з масиву ************

// function maxNumber2(array) {
//     return Math.max.apply(null, array);
// }
//
// let maxNumber = maxNumber2([2, 22, 56, 78, 27, 88, 90, 21, 17, 67])
// console.log(maxNumber)

// - створити функцію яка повертає найменьше число з масиву **************

// function minNumber3(array) {
//     return Math.min.apply(null, array);
// }
//
// let minNumber = minNumber3([2, 22, 56, 78, 27, 88, 90, 21, 17, 67]);
// console.log(minNumber);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. ********
// Приклад [1,2,10]->13

// function sumNumbers(numbers) {
//     let result = 0;
//     for (const number of numbers) {
//         result += number;
//     }
//     return result;
// }
//
// let number = sumNumbers([2, 22, 56, 78, 27, 88, 90, 21, 17, 67]);
//
// console.log(number);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень. *************

// function average(numbers) {
//     let result = 0;
//     for (const number of numbers) {
//         result += number / 10;
//     }
//     return result;
// }
//
// let number = average([2, 22, 56, 78, 27, 88, 90, 21, 17, 67]);
//
// console.log(number);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше ********
// (Math використовувати заборонено);

// function maxMinArray(array) {
//     let max = array[0];
//     let min = array[0];
//     for (const num of array) {
//         if (num > max) {
//             max = num;
//         }
//
//         if (num < min) {
//             min = num;
//         }
//     }
//     console.log(min);
//     console.log(max);
//     return min;
// }
//
// maxMinArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// - створити функцію яка заповнює масив рандомними числами ***************
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function randomArrayNumbers(numberElement) {
//     let arrRandom = [];
//     for (let i = 0; i < numberElement; i++) {
//         let random = Math.round(Math.random() * 100);
//         arrRandom.push(random);
//     }
//     return arrRandom;
// }
//
// let arrRandom = randomArrayNumbers(10);
// console.log(arrRandom);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.*************
// limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomArrNum(numberElement, limit) {
//     let randomArr = [];
//     for (let i = 0; i < numberElement; i++) {
//         let randomizer = Math.round(Math.random() * limit);
//         randomArr.push(randomizer);
//     }
//     return randomArr;
// }
//
// let randomArr = randomArrNum(10, 1000);
// console.log(randomArr);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1]. ***********

function reverse(array) {
    let newArr = [];
    for (let i = array.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArr[ri] = array[i];
    }
    return newArr;
}

console.log(reverse([1,2,3]));

// function reverse(array) {
//     let newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         newArr.unshift(array[i])
//     }
//     return newArr;
// }
//
// console.log(reverse([1,2,3]));