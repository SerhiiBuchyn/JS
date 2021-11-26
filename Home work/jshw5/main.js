// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка обчислює та повертає площу прямокутника висотою.

// let sRectangle = (a, b) => a * b;
//
// console.log(sRectangle(10, 20));

// - створити функцію яка обчислює та повертає площу кола


// let sCircle = (PI, r) => PI * (r ** 2);
//
// console.log(sCircle(3.14, 4));

// - створити функцію яка обчислює та повертає площу циліндру

// let sCylinder = (PI, r, h, constanta) => constanta * PI * r * h;
//
// console.log(sCylinder(3.14, 3, 10, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arrFunction = (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
//
// arrFunction([1, 2, 3, 4, 5]);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let paragraphFunction = (text) => {
//     document.write(`<p>${text}</p>`);
// }
// paragraphFunction('Lorem ipson');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let ulCreat = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
//
// ulCreat('item');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let liCreat = (text, liNumbers) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < liNumbers; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// liCreat('Lorem ipson',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let primitiveArr = (arr) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//     document.write(`</ul>`);
// };
//
// primitiveArr([1, 2, true, false, 'sting', 4, 'asd', 'achtung', false, 22]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// ' + 'Для кожного об'єкту окремий блок.


// let arrUser = (user) => {
//     for (const userElement of user) {
//     document.write(`<div>${userElement.id} - ${userElement.name} - ${userElement.age}`);
//     }
// };
//
// arrUser([
//     {id: 1, name: 'petya', age: 22},
//     {id: 2, name: 'nazar', age: 21},
//     {id: 3, name: 'anna', age: 26},
//     {id: 4, name: 'ivan', age: 23},
// ]);