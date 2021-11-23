// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const r = (...h) => {
//     let min = h[0];
//
//     for (let i = 0; i < h.length; i++) {
//         if(h[i]< min){
//             min = h[i];
//         }
//     }
//     document.write(min)
// }
//
// r(4, 5, 6,-7.88)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const r = (...h) => {
//     let max = h[0];
//
//     for (let i = 0; i < h.length; i++) {
//         if(h[i]> max){
//             max = h[i];
//         }
//     }
//     document.write(max)
// }
//
// r(4, 5, 6,-7.88)

// - створити функцію яка повертає найбільше число з масиву

// const array = [45,6546,35,24,535,5]
// const num = (arr) => {
//     let max = arr[0];
//
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]> max){
//             max = arr[i];
//         }
//     }
//     document.write(max)
// }
//
//   num(array)

// - створити функцію яка повертає найменьше число з масиву

// const array = [45,6546,35,24,535,5]
// const num = (arr) => {
//     let min = arr[0];
//
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]< min){
//             min = arr[i];
//         }
//     }
//     document.write(min)
// }
//
//   num(array)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// const array = [1,2,3,4,6]
// const number = (arr) =>{
//     let sum = 0;
//     for (let i = 0; i < arr.length ; i++) {
//        sum += arr[i];
//
//     }
//     console.log(sum)
// }
//
// number(array)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// const arr = [1,2,3,4,6]
// const number = (array) =>{
//     let sum = 0;
//     for (let i = 0; i < array.length ; i++) {
//          sum += array[i];
//
//     }
//     console.log(sum/array.length)
// }
//
// number(arr)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// const r = (...h) => {
//     let max = h[0];
//     let min = h[0];
//
//     for (let i = 0; i < h.length; i++) {
//         if (h[i] > max) max = h[i];
//         if (h[i] < min) min = h[i];
//     }
//
//     document.write(max);
//     return (min);
// }
//
// let a = r(4, 5, 6, -7.88)
// console.log(a)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let array = []
//
// const rand = (random) => {
//     for (let i = 0; i < 30; i++) {
//
//         let g = Math.floor(Math.random() * 100)
//         random.push(g)
//     }
// }
// rand(array);
//
// console.log(array)
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.limit - аргумент, який характеризує кінцеве значення діапазону.

// let array = []
//
// const rand = (random, limit ) => {
//     for (let i = 0; i < 20; i++) {
//
//         let g = Math.floor(Math.random() * limit)
//         random.push(g)
//     }
// }
// rand(array, 20);
//
// console.log(array)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let Arr = [53,657,9,8,3];
const name = ( ret ) => {
    newArr=[]
    for (let i = ret.length - 1; i > 0; i--) {
        newArr[newArr.length] = ret[i]
    }
    return newArr;

}
console.log(name(Arr));

