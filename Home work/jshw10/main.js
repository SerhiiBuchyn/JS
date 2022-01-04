// -1 Создать произвольный елемент с id = text.  Используя JavaScript,
// сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let p = document.createElement('p');
p.id = 'text';
p.innerText = 'lorem ipso';

document.body.appendChild(p);

let btn = document.getElementById('btn');
btn.onclick = function () {
    let test = document.getElementById('text');
    if (test.style.display === `none`) {
        test.style.display = 'block';
    } else {
        test.style.display = 'none';
    }
}

//     -2 Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let button = document.getElementById('btn1');
button.onclick = function () {
    let btnNone = document.getElementById('btn1');
    btnNone.style.display = 'none';
}

// -3 створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

document.getElementById('btn2').onclick = function () {
    let age = document.getElementById('age').value;
    if (!age) {
        alert('you dont type our age');
    } else if (+age < 18) {
        alert('you dont have access');
    } else {
        alert('you are welcome you have access');
    }
}

// -4 Создайте меню, которое раскрывается/сворачивается при клике

const menu = document.getElementsByClassName('menu')[0];
menu.onclick = function () {
    this.classList.toggle('collapse');
}


//-5  Создать список комментариев, пример объекта коментария-{title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


let comments = [
    {name: 'Vasya', body: 'bla bla bla'},
    {name: 'Petya', body: 'hello world'},
    {name: 'Nazar', body: 'na na na na na na'},
    {name: 'lorem', body: 'lorem ipsum dolo sit ameti'}
];

let wrapComments = document.createElement('div');
wrapComments.classList.add('wrap__Comments');
document.body.appendChild(wrapComments);

for (const item of comments) {
    let elementDiv = document.createElement('div');
    elementDiv.classList.add('element');

    let nameElements = document.createElement('h3');
    nameElements.classList.add('name');
    nameElements.innerText = `name - ${item.name}`;

    let bodyElements = document.createElement('p');
    bodyElements.classList.add('content');
    bodyElements.innerText = `${item.body}`;

    let btnElements = document.createElement('button');
    btnElements.classList.add('button__content');
    btnElements.innerText = 'Сховати';

    btnElements.onclick = function () {
        bodyElements.classList.toggle('hidden_content');

        elementDiv.append(nameElements, bodyElements, btnElements);
        wrapComments.append(elementDiv);
    }
}