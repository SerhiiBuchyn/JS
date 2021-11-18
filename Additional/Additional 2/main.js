// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те,
// що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//
// if (friends.length >= 3) {
//     console.log("що це великий масив");
// } else {
//     console.log("це маленький масив");
// }


// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше).
//     Перевірити, чи знаходиться перше число між двома іншими.

// let num1 = +prompt("Please type first number");
//
// let num2 = +prompt("Please type second number");
//
// let num3 = +prompt("Please third number");
//
// if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
//     console.log(num1);
// } else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
// console.log(num2)
// } else if ((num3 > num1 && num3 < num2) || (num3 < num1 && num3 > num2)) {
//     console.log(num3);
// } else {
//     console.log("Error");
// }

// - Перепишіть конструкцію if з використанням умовного оператора '?':

// a = 1;
//
// b = 2;
//
// let result = (a + b < 4 ?  'Мало' : 'Багато');
// console.log(result);


// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором


let number = +prompt("Please type number from -100 for 100");

let result = ((number > 0)? 'позитивне' : (number ===0)? 'null': (number < 0) ? 'негативне': ' ');
console.log(result);