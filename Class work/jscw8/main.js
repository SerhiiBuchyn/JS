// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

let addHeaderClass = document.getElementById('main_header');
addHeaderClass.classList.add('newHeader');

// b) робить шириниу елементу ul 400px

let widthUl = document.querySelector('ul');
widthUl.style.width = '400px';


// c) робить шириниу всіх елементів з класом linkList шириною 50%

let widthLinkList = document.getElementsByClassName('linkList');
for (const li of widthLinkList) {
    li.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let contentListElement2 = document.getElementsByClassName('listElement2');
console.log(contentListElement2);

// e) отримує всі елементи li та змінює ім колір фону на сірий

let bgLiElements = document.getElementsByClassName('linkList');
for (const liElement of bgLiElements) {
    liElement.style.backgroundColor = 'silver';
    liElement.style.marginBottom = '2px';

}

console.log(bgLiElements);

// f) отримує всі елементи 'a' та додає їм клас anchor

let addClassAnchor = document.getElementsByTagName('a');
for (const aElement of addClassAnchor) {
    aElement.classList.add('anchor');
}
console.log(addClassAnchor);

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів

// let link3List = document.getElementsByTagName('a');
//
// for (const linkElement of link3List) {
//     console.log(linkElement);
//     if (linkElement.innerText === 'link3') {
//         linkElement.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX.
// Де XXX - текстовий контент елементу a

let aAll = document.getElementsByTagName('a');
for (const aAllElement of aAll) {
    console.log(aAllElement);
    aAllElement.classList.add('element_XXX');
    aAllElement.innerText = 'XXX';
}


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let backgroundSubHeader = prompt('Please type color red or silver')
//
// let allSubHeader = document.getElementsByClassName('sub-header');
// for (const allSubHeaderElement of allSubHeader) {
//     console.log(allSubHeader);
//     if (backgroundSubHeader === 'red') {
//         allSubHeaderElement.style.backgroundColor = 'red';
//     } else if (backgroundSubHeader === 'silver') {
//         allSubHeaderElement.style.backgroundColor = 'silver';
//     }
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()

// let bgSubHeader2 = prompt('please type color blue or green');
//
// let subHeader2 = document.getElementsByClassName('sub-header');
// for (const subHeader2Element of subHeader2) {
//     console.log(subHeader2);
//     if (subHeader2Element.innerText === 'content 2 segment' && bgSubHeader2 === 'green') {
//         subHeader2Element.style.color = 'green';
//     } else if (subHeader2Element.innerText === 'content 2 segment' && bgSubHeader2 === 'blue') {
//         subHeader2Element.style.color = 'blue';
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()

let randomText = prompt('please type random text');

let textContent1 = document.getElementsByClassName('content_1');
textContent1[0].innerText = randomText;

// l) отримати елементи p та змінити їм padding на 20px

let allPlist = document.getElementsByTagName('p');
console.log(allPlist);
for (const allPlistElement of allPlist) {
    allPlistElement.style.padding = '20px';
    allPlistElement.style.border = '1px solid green';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// Перший спосіб вирішення.


let test1Text2 = document.getElementsByClassName('text2');
test1Text2[0].innerText = 'sep 2021';

//// Другий спосіб вирішення.

// let test2Text2 = document.getElementsByClassName('text2');
// for (const test2Text2Element of test2Text2) {
//     test2Text2.innerHTML = `<p>sep 2021</p>`;
// }