// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

let normalName = (name) => {
    return name
        .replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ')
};
console.log(normalName(n1));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomizer = (numberElement, limit) => {
    let randomArr = [];
    for (let i = 0; i < numberElement; i++) {
    let random = Math.round(Math.random() * limit);
    randomArr.push(random);
    }
    return randomArr;
};

let randomArr = randomizer(10, 100);
console.log(randomArr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sorts

// let sortArr =  randomArr.sort((a, b) => {
//     return a - b;
// });
//
// console.log(sortArr);



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let newArr = randomArr.filter(value => {
    return value % 2 === 0;
});

console.log(newArr);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let StrArr = randomArr.map(value => {
    return value + '';
});

console.log(StrArr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let nums = [11, 21, 3];

let sortNums = (arr,direction) => arr.sort((a, b) => direction === 'ascending' ? a - b : b - a);
    // if (direction === 'ascending') {
    //     return arr.sort((a, b) =>  a - b);
    // } else (direction === 'descending');
    //     return arr.sort((a, b) => b - a);

console.log(sortNums(nums, 'ascending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortCoursesAndDurationArray = (arr) => arr.sort((courseCurrent, courseNext) => courseCurrent.monthDuration - courseNext.monthDuration).filter((course) => course.monthDuration > 5);



console.log(sortCoursesAndDurationArray(coursesAndDurationArray));
