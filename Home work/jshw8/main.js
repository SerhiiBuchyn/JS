// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

let contentByID = document.getElementById('content');
console.log(contentByID);

// -- отримує текст з блоку з id "rules"

let rulesByID = document.getElementById('rules');
console.log(rulesByID);

// -- замініть текст параграфа з id 'content' на будь-який інший

contentByID.innerText = 'bla bla bla bla';


// -- замініть текст параграфа з id 'rules' на будь-який інший

rulesByID.innerText = 'hello hello hello';

// -- змініть кожному елементу колір фону на червоний

let allElements = document.body.children;
for (const el of allElements) {
    el.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій

let allElementsColor = document.body.children;
for (const el2 of allElementsColor) {
    el2.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let rulesList = document.getElementById('rules');
console.log(rulesList.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let FcRulesTextColor = document.getElementsByClassName('fc_rules');
for (const fcRulesTextColorElement of FcRulesTextColor) {
    fcRulesTextColorElement.style.color = '#c7093f';
}