// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectg(a,b){
//     let x = a*b;
//     return x;
// }
// console.log(rectg(7,15));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function rectg(r){
//     let x = r**2;
//     let y = x * 3.14
//     return y;
// }
// console.log(rectg(56));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function rectg(r, h) {
    let x = r ** 2;
    return Math.PI * x * h;
}

console.log(rectg(5, 7));
// - створити функцію яка приймає масив та виводить кожен його елемент
//
//  let array= [1,2,3,4,5,6,7,]
// function arr(array){
//     for (i=0; i< array.length; i++);
//         console.log(array[i])
// }
// arr(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


// function parg (text) {
//     document.write(`<p>${text}</p>`)
//     document.write(`<p>${text}</p>`)
// }
// parg('texdt')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function text (text){
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// text('список')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function text(text) {
//
//     document.write(`<ul>`)
//     for (i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
//
// }
//
// text('список')
//

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function text(text) {
//
//
//     let array=[false,14336,'text'];
//     document.write(`<ul>`)
//     for (i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//         document.write(`<li>${array[i]}</li>`);
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ul>`)
// }
//
// text('список')



// let Arr = [false,14336,'text'];
// function array (arra){
//     document.write(`<ul>`)
//         for (let i = 0; i < 3; i++) {
//             document.write(`<li>${Arr[i]}</li>`);
//         }
//     document.write(`</ul>`)
//
// }
// array(array);

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let array = [{id: 1, name: 'Stas Grishun', age: 18}, {id: 3, name: 'Nosok', age: `120 years`}];
function arr(array) {
    for (let arrayelement of array) {
        document.write(`<div>${arrayelement.id}.${arrayelement.name} - ${arrayelement.age}</div>`);
    }
}
arr(array);