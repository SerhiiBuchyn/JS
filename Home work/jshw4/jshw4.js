// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function areaRectangle(a, b) {
//         return a * b;
// }
//
// console.log(areaRectangle(5, 20));
// document.write(`${areaRectangle(5, 20)} - Площа прямокутника `);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaCircle(p, r) {
//         return p * Math.pow(r, 2);
// }
//
// console.log(areaCircle(3.14, 4));
// document.write(`${areaCircle(3.14, 4)} - Площа кола`);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function areaCylinder(p, r, h) {
//         return p * (Math.pow(r, 2)) * h;
// }
//
// console.log(areaCylinder(3.14, 5, 7));
// document.write(`${areaCylinder(3.14, 5, 7)} - Площа циліндра`);

// - створити функцію яка приймає масив та виводить кожен його елемент

// function arrayNumber(array) {
//         for (const arrayElement of array) {
//                 console.log(arrayElement);
//         }
// }
//
// arrayNumber([15, 22, 3, 6, 32, 5]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function text (p){
//         document.write(`<p>${p}</p>`)
// }
// text('lorem ipson asd')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function textLi (text){
//         document.write(`<ul>`);
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`</ul>`)
// }
//
// textLi('item');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function textLi2(text, size) {
//         document.write(`<ul>`);
//         for (let i = 0; i < size; i++) {
//                 document.write(`<li>${text}</li>`);
//         }
//         document.write(`</ul>`);
// }
//
// textLi2('lorem ipson', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function arrayPrimitiveElements (array2){
//         document.write(`<ul>`);
//         for (let i = 0; i < array2.length; i++) {
//                 document.write(`<li>${array2[i]}</li>`);
//         }
//         document.write(`</ul>`);
// }
//
// arrayPrimitiveElements([10, 22, true, false, 'asd', 'petya']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

//
// let user = [
//         {id: 1, name: 'petya', age: 22},
//         {id: 2, name: 'oleh', age: 32},
//         {id: 3, name: 'olha', age: 25},
//         {id: 4, name: 'nazar', age:21},
// ];
//
// function userArray(array) {
//         for (const arrayElement of array) {
//                 document.write(`<div>${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age}</div>`);
//         }
// }
//
// userArray(user);