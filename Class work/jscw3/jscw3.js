// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// task 1 *************
//     1. перебрати його циклом while

// i = 0
// while (i <= array1.length) {
//     console.log(array1[i]);
//     i++
// }

// task 2 *************
//     2. перебрати його циклом for

// for (let i = 0; i < array1.length; i++) {
//     console.log(array1[i])
// }

// task 3 *************
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// i=0
// while (i < array.length) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
//     i++;
// }

// task 4 *************

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < array.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(array [i]);
//     }
// }

// task 5 *************

// 5. перебрати циклом while та вивести  числа тільки з парним  значенням

// debugger
// i = 0;
// while (i < array.length) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
//     i++;
// }

// task 6 *************

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (i = 0; i <= array.length; i++) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i])
//     }
// }

// task 7 *************

// 7. замінити кожне число кратне 3 на слово "okten"

// for (i = 0; i <= array.length; i++) {
//     if (array[i] % 3 === 0) {
//         array[i] = "okten"
//         console.log(array[i]);
//     }
// }
// console.log(array)

// task 8 *************

// 8. вивести масив в зворотньому порядку.

// for (let i = array.length; i > -1; i--) {
//     console.log(array[i])
// }

// task 9 *************

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// task 9.1 перебрати його циклом while *************

// i = array.length;
// while (i > -1) {
//     console.log(array[i])
//     i--
// }

// task 9.2 перебрати його циклом for *************

// for (let i = array.length; i > -1 ; i--) {
//     console.log(array[i]);
// }

// task 9.3 перебрати циклом while та вивести  числа тільки з непарним індексом *************

// i = array.length;
// while (i > -1) {
//     if (array[i] % 2 !== 0) {
//         console.log(array[i]);
//     }
//     i--;
// }

// task 9.4 перебрати циклом for та вивести  числа тільки з непарним індексом *************

// for (i = array.length; i > -1; i--) {
//     if (array[i] % 2 !== 0) {
//         console.log(array[i]);
//     }
// }

// task 9.5 перебрати циклом while та вивести  числа тільки з парним  значенням *************

// i = array.length;
// while (i > -1) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
//     i--;
// }

// task 9.6 перебрати циклом for та вивести  числа тільки парні  значення *************

// for (let i = array.length; i > -1; i--) {
//     if (array[i] % 2 ===0) {
//         console.log(array[i]);
//     }
// }

// task 9.7 замінити кожне число кратне 3 на слово "okten" *************

// for (let i = array.length; i > -1; i--) {
//     if (array[i] % 3 === 0) {
//         array[i] = "okten";
//         console.log(array[i]);
//     }
// }
// console.log(array);