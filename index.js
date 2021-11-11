// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let result = array[0] + array[1] + array[2] + array[3] + array[4] + array[5] + array[6] + array[7] + array[8] + array[9] + array[10]
console.log(result)

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    name: 'nazva',
    count: 100,
    genre: 'roman'

}

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let books = {name: 'nazva', count: 100, genre: 'roman', authors: 'roman nechaev'}

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let users = [
    {name: 'nazva', count: 100, genre: 'roman', author: 'roman nechaev'},
    {name: 'nazvul', count: 50, genre: 'kazka', author: 'romanovich nechaev'},
    {name: 'naza', count: 20, genre: 'romanu', author: 'roman nechaevich'},
];
console.log(users[0].name);
console.log(users[0].count);
console.log(users[0].genre);
console.log(users[0].author);
console.log(users[1].name);
console.log(users[1].count);
console.log(users[1].genre);
console.log(users[1].author);
console.log(users[2].name);
console.log(users[2].count);
console.log(users[2].genre);
console.log(users[2].author);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height * width;
console.log(s)

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC= 10;
let dC = 4;
let v = heightC * dC  * Math.PI;
console.log(v)

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

// const a = Math.pow(10, 2)
const n = 3;
const m = 4;

    const result2 = Math.sqrt(n**2 + m**2);

console.log(result2);