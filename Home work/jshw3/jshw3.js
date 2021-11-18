//  --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let array1 = [11, 12, 13, 14, 15];
// console.log(array1);
//
// let array2 = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5'];
// console.log(array2);
//
// let array3 = [ 'oleh', 'yura', 'olya', 'vasya', 'serhii', 1, 2, 3, 4, 5, true, true, true, false, false];
// console.log(array3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array4 = [];
// array4[0] = 1;
// array4[1] = 33;
// array4[2] = 433;
// array4[3] = 10;
// array4[4] = 4;
//
// console.log(array4);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i <= 10; i++) {
//     document.write(`<div>about</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i <= 10; i++) {
//     document.write(`<div>about ${i}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i <= 20) {
//     document.write(`<h1>title</h1>`);
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i <= 20) {
//     document.write(`<h1>title ${i}</h1>`);
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (let i = 0; i <= array5.length; i++) {
//     console.log(array5[i]);
// }
//
// for (const number of array5) {
//     console.log(number);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let array6 = ['olya', 'petya', 'yura', 'nazar', 'oleh', 'ira', 'vova', 'natasha', 'ihor', 'luba'];
// for (const string of array6) {
//     console.log(string);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let array7 = ['oleh', 'yura', 'olya', 'vasya', 'serhii', 1, 2, 3, 4, 5,]
//
// for (const array7Element of array7) {
//     console.log(array7Element);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

// let array8 = ['olya', 'petya', 'yura', 'nazar', 1, 2, 3, true, false, true];
//
// for (const array8Element of array8) {
//     if (typeof array8Element === "boolean") {
//         console.log(array8Element);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

// let array9 = ['olya', 'petya', 'yura', 'nazar', 1, 2, 3, true, false, true];
//
// for (const array9Element of array9) {
//     if (typeof array9Element === "number") {
//         console.log(array9Element);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

// let array10 = [1, 2, 3, 'petya', 'olya', 'vova', 'dima', true, false, false];
//
// for (const array10Element of array10) {
//     if (typeof array10Element === "string") {
//         console.log(array10Element)
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let array11 = [];
//
// array11[0] = 1;
// array11[1] = 'petya';
// array11[2] = 33;
// array11[3] = 'olya';
// array11[4] = true;
// array11[5] = false;
// array11[6] = 123;
// array11[7] = 'nazar';
// array11[8] = true;
// array11[9] = 'serhii';
//
// for (const array11Element of array11) {
    // console.log(array11Element);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i <= 10; i++) {
//     console.log([i]);
//     document.write([i]);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i <= 100; i++) {
//     console.log([i]);
//     document.write([i]);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i <= 100; i += 2) {
//     console.log([i]);
//     document.write([i]);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write


// for (i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(i);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for ( i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(i);
//     }
// }