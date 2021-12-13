// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function Car(model, producer, graduationYear, maxSpeed, engineCapacity) {
//
//     this.model = model;
//     this.producer = producer;
//     this.graduationYear = graduationYear;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     }
//     this.info = function () {
//         for (const [key, value] of Object.entries(this)) {
//             if (typeof key !== 'function' && typeof value !== 'function') {
//                 console.log(`${key}: ${value}`);}
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed + maxSpeed;
//         console.log(car3)
//     };
//     this.changeYear = function (newYear) {
//         this.graduationYear = newYear;
//         console.log(car2);
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//
//     }
// }
//
// let cars = [
//     car1 = new Car('BMW', 'ASDQWE', 2011, 277, 2.5),
//     car2 = new Car('Mitsubishi', 'Japan', 2015, 283, 2.5),
//     car3 = new Car('Nissan', 'Japan', 2017, 274, 2.2),
// ];

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// car1.drive();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// car2.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// car3.increaseMaxSpeed(20);

// -- changeYear (newValue) - змінює рік випуску на значення newValue

// car2.changeYear(1997);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Driver(name, age, experience) {
//     this.name = name;
//     this.age = age;
//     this.experience = experience;
// }
//
// driver1 = new Driver ('Pako', 27, 15);
//
// car2.addDriver(driver1);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// class CarClass {
//
//     constructor(model, producer, graduationYear, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.graduationYear = graduationYear;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${(this.maxSpeed)} на годину`);
//     }
//
//     info() {
//         console.log(`модель - ${this.model}, виробник - ${this.producer},
//          рік випуску - ${this.graduationYear}, максимальна швидкість - ${this.maxSpeed},
//          об'єм двигуна - ${this.engineCapacity}`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(newCar2);
//     }
//
//     changeYear(newYear) {
//         this.graduationYear = newYear;
//         console.log(newCar2);
//     }
//
//     addDriver(driver) {
//         this.drive = driver;
//         console.log(newCar3);
//     }
// }

// let newCars = [
//     newCar1 = new CarClass('Audi', 'Germany', 2008, 250, 2),
//     newCar2 = new CarClass('Ford', 'USA', 2020, 265, 2.2),
//     newCar3 = new CarClass('Jeep', 'USA', 2017, 250, 2.4),
// ];

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// newCar1.drive();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// newCar1.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// newCar2.increaseMaxSpeed(30);

// -- changeYear (newValue) - змінює рік випуску на значення newValue

// newCar2.changeYear(2018);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Driver(name, age, experience) {
//     this.name = name;
//     this.age = age;
//     this.experience = experience;
// }
//
// driver1 = new Driver('Pako', 27, 15);
//
// newCar3.addDriver(driver1);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popelyshka {
    constructor(name, age, shoesSize) {
        this.name = name;
        this.age = age;
        this.shoesSize = shoesSize;
    }

}

let arrPopelyshka = [
    dama1 = new Popelyshka('Nina', 21, 37),
    dama2 = new Popelyshka('Natasha', 22, 35),
    dama3 = new Popelyshka('Nadya', 20, 36),
    dama4 = new Popelyshka('Lida', 23, 34),
    dama5 = new Popelyshka('Uliana', 20, 40),
    dama6 = new Popelyshka('Ira', 25, 38),
    dama7 = new Popelyshka('Luba', 19, 37.5),
    dama8 = new Popelyshka('Nina Petrivna', 45, 44),
    dama9 = new Popelyshka('Alina', 18, 36.5),
    dama10 = new Popelyshka('Olha', 24, 41),
];


console.log(arrPopelyshka)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, findShoes) {
        this.name = name;
        this.age = age;
        this.findShoes = findShoes;
    }

}

let mrPrince = new Prince('Petro', 44, 44);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const popelyshka of arrPopelyshka) {
    if (popelyshka.shoesSize === mrPrince.findShoes) {
        console.log(popelyshka);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findPopelyshka = arrPopelyshka.find((popelyshka) => popelyshka.shoesSize === mrPrince.findShoes);

console.log(findPopelyshka);s
