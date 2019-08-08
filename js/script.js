// Комментарий

/* Коментарий */

'use strict'

var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;
console.log(leftBorderWidth);/*Выводим значение leftBorderWidth */


let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone["name"]);/*Выводим имя персоны */

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[0]);/*Выводит первый пункт из arr (т.к. счёт начинается с 0)*/

//alert("Hello World!");/*Выводит сообщение и кнопку ok */

//let answer = confirm("Are you here?");/*Выводит сообщение и кнопки ok и Cancel*/
//console.log(answer);/*Выводит в консоль результат нажатия кнопки из модального окна*/

//let answer = prompt("Есть ли вам 18 лет?", "Да");/*По умолчанию будет "Да"*/
//console.log(answer);/*Выводит в консоль результат нажатия кнопки из модального окна*/

let answer = prompt("Есть ли вам 18 лет?", "Да");
console.log(typeof(answer));/*Проверка на тип данных*/