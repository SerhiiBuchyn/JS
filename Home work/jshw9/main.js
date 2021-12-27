// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//

let divWrap = document.createElement('div');
divWrap.classList.add('wrap', 'collapse', 'alpha', 'beta');
console.log(divWrap);

divWrap.style.backgroundColor = 'silver';
divWrap.style.color = 'green';
divWrap.style.fontSize = '40px';
divWrap.innerText = 'bla bla bla';
document.body.appendChild(divWrap);
document.body.appendChild(divWrap.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//

let menuList = document.getElementsByClassName('menu')[0];

let arr = ['Main', 'Products', 'About us', 'Contacts'];

for (const item of arr) {
    let li = document.createElement('li');
    li.innerText = `${item}`;

    menuList.appendChild(li);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//

let newDiv = document.createElement('div');
newDiv.classList.add('coursesArr');
document.body.appendChild(newDiv);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const element of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `title - ${element.title} - monthDuration - ${element.monthDuration}`;

    newDiv.appendChild(div);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let wrapDivCourses = document.createElement('div');
wrapDivCourses.classList.add('wrapCoursesInfo');
document.body.appendChild(wrapDivCourses);

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const item of coursesAndDurationArray1) {
    let addDiv = document.createElement('div');
    addDiv.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `title - ${item.title}`;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `monthDuration - ${item.monthDuration}`;


    addDiv.appendChild(h1);
    addDiv.appendChild(p);
    wrapDivCourses.appendChild(addDiv);
}

