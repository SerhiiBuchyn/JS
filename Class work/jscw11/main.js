// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених"
// при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

const usersDiv = document.createElement('div');
usersDiv.classList.add('users');

document.body.appendChild(usersDiv);

const favorites = [];

for (const user of users) {
    const div = document.createElement('div');
    div.classList.add('user');

    const p = document.createElement('p');
    p.classList.add('content');
    p.innerText = `name - ${user.name}, age - ${user.age}, status - ${user.status}`;

    const btn = document.createElement('button');
    btn.id = 'btn';
    btn.innerText = 'add to favorite';
    btn.onclick = function (e) {
    favorites.push(user);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    div.append(p, btn);
    usersDiv.append(div);
}


