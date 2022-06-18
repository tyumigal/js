// console.log('Hello World');

// Типы переменных

// let - может менять значение
// const - не может менять значение
// var - устаревшая переменная (работает только в функциях)

// let userName = 'Neo'; //строка
// let age = 42; //число
// let isMarried = true; //логическое значение
// let work; // undefining

// console.log(typeof age);
// console.log(work);

// BigInt - работа с большими цифрами
// console.log(Number.MAX_SAFE_INTEGER);

// Symbol

// const time = 21;

// if (time < 12) {
//     console.log('Доброе утро!');
// } else if (time > 20) {
//     console.log('Добрый вечер!');
// } else {
//     console.log('Добрый день!');
// }

// Тернарный оператор

// 13 < 12 ? console.log('Условие верно') : console.log('Условие не верно');

let time = 11;
// let greeting;

// if (time < 12) {
//     greeting = 'Доброе утро!';
// } else if (time > 20) {
//     greeting = 'Добрый вечер!';
// } else {
//     greeting = 'Добрый день!';
// }

// let greeting = time < 12 ? 'Доброе утро' : 'Добрый день';
// console.log(greeting);

// Конкатенация

// console.log(`Привет, ${userName}`);

// // Функции

// function sayHi () {
//     console.log('Привет, дорогой пользователь!');
// }



// function declaration
// function expression

// function sayHi (name) {
//     console.log(`Привет, ${name}`);
// }

// sayHi('Bujhm');


// function summ(a, b) {
//     const result = a + b;
//     return result;
// }

// let res = summ(10, 15);
// console.log(res);


// function summ(a, b) {
//     return a + b;
// }

// console.log(summ(10, 15));

// const result = summ(summ(13, 13), summ(14, 14));
// console.log(result);

// Фукнкция, как аргумент

// function summ(a, b) {
//     return a + b;
// }

// function rasn(a,b) {
//     return a - b;
// }

// function doIt (func) {
//     let result = func(10, 20);
//     console.log(result);
// } 

// doIt (summ);
// doIt (rasn);

// Самовызывающаяся функция

// (function sayHi() {
//     console.log('Привет, дорогой пользователь!');
// })()

// function sayHi(name) {
//     console.log('Привет, дорогой пользователь!');
// }

//Стрелочные функции

// const arrSayHi = (name) => {
//     console.log(`Привет, ${name}`);
// }

// const arrSayHi2 = (name) => console.log(`Привет, ${name}`);

// arrSayHi('Boris');
// arrSayHi2('Jhon');

// const summ = (a, b) => a * b
// const res = summ(4, 5);
// console.log(res);

// массивы

// const autoBrands = ['Lada', 'BMW', 'Toyota', 'Renault'];
// console.log(autoBrands);
// console.log(autoBrands.length);
// console.log(`Мой автомобиль - ${autoBrands[3]}`);
// autoBrands.push('Nissan');
// console.log(autoBrands);
// autoBrands.pop('Nissan');
// console.log(autoBrands);

// console.log('Start');

// for

// for (let i = 0; i < 6; i++) {
//     console.log(i);
// } 

// console.log('Finish');

const autoBrands = ['Lada', 'BMW', 'Toyota', 'Renault'];
// for (i = 0; i < autoBrands.length; i++) {
//     console.log(autoBrands[i]);
// }

// for of - обход массива

// for (let item of autoBrands) {
//     console.log(item);
// }

// forEach

// autoBrands.forEach(function(item, index){
//     console.log(`${item} => ${index}`);
// })

// autoBrands.forEach(printBrand);
// function printBrand (brand, i) {
//     console.log(`${brand} => ${i}`);
// }

// autoBrands.forEach((brand, i) => console.log(`${brand} => ${i}`));

const number = [1, 2, 4, 8, 16, 32];
// console.log(number);

// for (i = 0; i < number.length; i++) {
//     console.log(number[i]);
// }

// for (item of number) {
//     console.log(item);
// }

// for (i = 0; i < number1.length; i++) {
//     console.log(number1[i]);
// }

// number.forEach(function(item, index) {
//     console.log(`${item} => ${index}`);
// });

// number.forEach(darknumber);
// function darknumber (x, y) {
//     console.log(`${x} => ${y}`);
// }

// Объекты
// let userName = 'Neo';
// let age = 42;
// let isMarried = true;

// const person = {
//     userName: 'Neo',
//     age: 42,
//     isMarried: true,
//     sayHi: function (name) {
//         console.log(`Привет, ${name}!`);
//     }
// }

// person.sayHi('Игорь');

// console.log(person);
// console.log(person.userName);
// console.log(person['age']);

// let propertyName = 'profession';
// console.log(person['profession']);
// person.study = 'JS';
// console.log(person);

// delete person.age;
// console.log(person);

// This - ключевое слово

// const person = {
//     userName: 'Neo',
//     age: 42,
//     isMarried: false,
//     sayHi: function (name) {
//         console.log(`Привет, ${name}! Меня зовут ${this.userName}`);
//     }
// }

// person.sayHi('Игорь');

// Обход объектов с помощью for in

// const person = {
//     userName: 'Neo',
//     age: 42,
//     isMarried: true,
//     sayHi: function (yourname) {
//         console.log(`Привет, ${yourname}! Меня зовут ${this.userName}`);
//     }
// }

// for (let key in person) {
//     console.log(key, ':', person[key]);
// }

// Классы, конструкторы.

class Person {
    constructor (userName, age, isMarried) {
        this.userName = userName;
        this.age = age;
        this.isMarried = isMarried;
    }

    sayHi(name) {
        console.log(`Привет, ${name}! Меня зовут ${this.userName}`);
    }
}

const person1 = new Person('Neo', 42, false);
console.log(person1.age); 
const person2 = new Person('Olga', 35, false);
console.log(person1); 
console.log(person2); 

person1.sayHi('Игорь');
person2.sayHi('Игорь');