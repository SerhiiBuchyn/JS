// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, userName, surname, email, phone) {

    this.id = id;
    this.userName = userName;
    this.surname = surname;
    this.emaill = email;
    this.phone = phone;
}

let user1 = new User(1, 'pako', 'wilson', 'pako.w@gmail.com', '03400030303');
let user2 = new User(2, 'serhii', 'kokos', 'kokos.w@gmail.com', '0340009999');
let user3 = new User(3, 'petya', 'famin', 'famin.w@gmail.com', '03406666303');
let user4 = new User(4, 'jim', 'blabla', 'blabla.w@gmail.com', '03400333303');
let user5 = new User(5, 'oleh', 'nos', 'nos.w@gmail.com', '0342222222');
let user6 = new User(6, 'anna', 'link', 'link.w@gmail.com', '0340555503');
let user7 = new User(7, 'petya', 'famin', 'famin.w@gmail.com', '03406666303');
let user8 = new User(8, 'jim', 'blabla', 'blabla.w@gmail.com', '03400333303');
let user9 = new User(9, 'oleh', 'nos', 'nos.w@gmail.com', '0342222222');
let user10 = new User(10, 'anna', 'link', 'link.w@gmail.com', '0340555503');

let newUsers = [];
newUsers[0] = user1;
newUsers[1] = user2;
newUsers[2] = user3;
newUsers[3] = user4;
newUsers[4] = user5;
newUsers[5] = user6;
newUsers[6] = user7;
newUsers[7] = user8;
newUsers[8] = user9;
newUsers[9] = user10;

// console.log(newUsers);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredUsers = newUsers.filter(({id}) => id % 2 === 0);
console.log(filteredUsers);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedUsers = filteredUsers.sort((userCurrent, userNext) => userCurrent.id - userNext.id);

console.log(sortedUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let clientsArr = [
    new Client(10,
        'pako',
        'wilson',
        'pako.w@gmail.com',
        '03400030303',
        ['meat', 'pasta','oli', 'salt']),


    new Client(8,
        'serhii',
        'kokos',
        'kokos.w@gmail.com',
        '0340009999',
        ['bred', 'juice']),

    new Client(5,
        'petya',
        'famin',
        'famin.w@gmail.com',
        '03406666303',
        ['beer', 'eggs', 'milk']),

    new Client(4,
        'jim',
        'blabla',
        'blabla.w@gmail.com',
        '03400333303',
        ['milk', 'chess', 'bread', 'tomato', 'sugar']),

    new Client(3,
        'oleh',
        'nos',
        'nos.w@gmail.com',
        '0342222222',
        ['milk', 'juice', 'tomato']),

    new Client(6,
        'anna',
        'link',
        'link.w@gmail.com',
        '0340555503',
        ['bred', 'tomato']),

    new Client(7,
        'petya',
        'famin',
        'famin.w@gmail.com',
        '03406666303',
        ['tomato', 'chess']),

    new Client(2,
        'jim',
        'blabla',
        'blabla.w@gmail.com',
        '03400333303',
        ['tomato']),

    new Client(9,
        'oleh',
        'nos',
        'nos.w@gmail.com',
        '0342222222',
        ['tomato', 'bred']),

    new Client(1,
        'anna',
        'link',
        'link.w@gmail.com',
        '0340555503',
        ['tomato', 'beer', 'chess']),

];

console.log(clientsArr);

// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort),

const clientsSort = clientsArr.sort((clientCurrent ,clientNext) => clientCurrent.order.length - clientNext.order.length);
console.log(clientsSort);





