// .Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
//  let rectangle = (a,b) => {
//     return a*b
// }
// console.log(rectangle(5,8));
// let rectangle = (a, b) => a * b;
// console.log(rectangle(5, 8));

// - створити функцію яка обчислює та повертає площу кола

// let x = (r) => r ** 2 * Math.PI;
// console.log(x(5));

// - створити функцію яка обчислює та повертає площу циліндру

// const y = (r, h) => r ** 2 * Math.PI * h;
// console.log(y(3,4));


// - створити функцію яка приймає масив та виводить кожен його елемент

// const arr = [1,43,55,64,4,4]
// const foo = (agr) => {
//    for(i = 0;i < agr.length; i++)
//     console.log(agr[i])
// }
//
// foo(arr);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// const p = (text) => {
//     document.write(`<p>${text}</p>`);
// }
// p('text')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// const p = (text) => {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`)
// }
// p('heloo')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const g = (text, number) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// g ('li', 11);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//  const array = [ 1,6,'jdhl',false,46];
// const primitive = (arr) =>{
//     document.write( `<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write( `<li>${arr[i]}</li>`)
//     }
//     document.write( `</ul>`)
//
// }
// primitive(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const array = [
    {id: 1, name: 'Vasiok', age: 24},
    {id: 2, name: 'Vasiliy', age: 25},
    {id: 3, name: 'Vitiok', age: 26},
    {id: 4, name: 'Vitalina', age: 28},
    {id: 5, name: 'Vegan', age: 32},
];

const primitive = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>${arr[i].id} - ${arr[i].age} - ${arr[i].name}</div>`)
    }
}
primitive(array);
