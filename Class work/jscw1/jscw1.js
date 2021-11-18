//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// Скласти результат цих чисел в змінній result.

let result = 145 + 12 * 3 + 33 / 5 - 3 * 10 - 22 + 123 - 1;
console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book1 = {name1: "harry potter and philosopher's stone", numPages1: "319", gener1: "fantasy"};

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book2 = {name2: "harry potter and secret room", numPages2: "360", gener2: "fantasy", author2: "Joan Rawlings"};

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
// Вивести кожну книгу як окремий об'єкт.

let books = [book1, book2];
console.log(books[0]);
console.log(books[1]);
document.write(books);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = (height * width);

console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let rC = dC / 2;
console.log(rC);
let v = 3.14 * (rC ** 2) * heightC;

console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора
// (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).


let n = 3;
let m = 4;
let k = (Math.pow(n, 2)) + (Math.pow(m, 2));

console.log(Math.sqrt(k));

