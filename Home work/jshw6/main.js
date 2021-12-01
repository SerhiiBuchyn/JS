// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let strUp1 = 'hello world';
let toUpperCaseStrUp1 = strUp1.toUpperCase();
console.log(toUpperCaseStrUp1);

let strUp2 = 'lorem ipsum';
let toUpperCaseStrUp2 = strUp2.toUpperCase();
console.log(toUpperCaseStrUp2);

let strUp3 = 'javascript is cool';
let toUpperCaseStr3 = strUp3.toUpperCase();
console.log(toUpperCaseStr3);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let strLower1 = 'HELLO WORLD';
let toLowerCaseStrLower1 = strLower1.toLowerCase();
console.log(toLowerCaseStrLower1);

let strLower2 = 'LOREM IPSUM';
let toLowerCaseStrLower2 = strLower2.toLowerCase();
console.log(toLowerCaseStrLower2);

let strLower3 = 'JAVASCRIPT IS COOL';
let toLowerCaseStrLower3 = strLower3.toLowerCase();
console.log(toLowerCaseStrLower3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyStr = ' dirty string   ';
console.log(dirtyStr);
let trimStr = dirtyStr.trim();
console.log(trimStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str = 'Каждый охотник желает знать';
let stringToArray = (str) => {
    return str.split(' ');
};

console.log(stringToArray(str));
document.write(str);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//   let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let string1 = 'Каждый охотник желает знать';

let delete_characters = (string1, length) => {
    return string1.substring(0, length);
};

console.log(delete_characters(string1, 7));
document.write(delete_characters(string1, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let string2 = "HTML JavaScript PHP";

let insert_dash = (string2) => {
    return string2.toUpperCase().replaceAll(' ', '-');
};

console.log(insert_dash(string2));
document.write(insert_dash(string2));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let string3 = 'hello okten';
let toUpperCase = (string3) => {
    return string3[0].toUpperCase() + string3.slice(1);
};

console.log(toUpperCase(string3));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//             0      1
let string4 = 'hello okten';

let capitalize = (string4) => string4.split(' ').map((val,) => toUpperCase(val));

console.log(capitalize(string4));



// Array.prototype.rossMap = (cb) => {
//     for (let i = 0; i < this.length; i++) {
//         cb(this[i], i, this)
//     }
// }
//
// let arr = ['aaa', 'bbb'];

// console.log(arr.rossMap((val, ind, ) => ))


