// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

// const btn1 = document.getElementById('btn1').onclick = function () {
//     const i1 = document.forms.f1.input1.value
//     const i2 = document.forms.f1.input2.value
//     const i3 = document.forms.f2.input3.value
//     const i4 = document.forms.f2.input4.value
//     console.log(i1, i2, i3, i4);
// }


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)

// const table = document.createElement('table');
// document.body.appendChild(table);
//
// const inputValue = document.getElementById('btn2');
//
// inputValue.addEventListener('click', function () {
//     const rowsValue = +document.forms.createTable.rows.value
//     const columnsValue = +document.forms.createTable.columns.value
//     const content = document.forms.createTable.content.value
//     console.log(rowsValue, columnsValue, content);
//
//     for (let i = 0; i < rowsValue; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < columnsValue; j++) {
//             const td = document.createElement('td');
//             td.innerText = content;
//
//             tr.append(td);
//         }
//
//         table.append(tr);
//     }
// });

// - Сворити масив не цензурних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// const badWords = ['Єнот', 'Слон', 'Хобот', 'Нога'];
//
// const btn3 = document.getElementById('btn3');
//
// btn3.onclick = function () {
//     const badInput = document.getElementById('badInput').value;
//     for (const badWord of badWords) {
//         if (badWord === badInput) {
//             alert('this word is bad');
//         }
//     }
//
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

const veryBadWords = ['Єнот', 'Слон', 'Хобот', 'Нога'];

const btn4 = document.getElementById('btn4');
btn4.onclick = function () {
    const veryBadInput = document.getElementById('veryBadInput').value;
    for (const veryBabWord of veryBadWords) {
        if (veryBadInput.includes(veryBabWord)) {
            alert('this sentence has bad word');
        }
    }
}

