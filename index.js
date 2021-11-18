// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(min1, min2, min3) {
//     if (min1 < min2 && min1 < min3) {
//         console.log(min1);
//     } else if (min2 < min3 && min2 < min3) {
//         console.log(min2);
//     } else {
//         console.log(min3);
//     }
// };
// min(120, 369, 98);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function Max(max1, max2, max3) {
//     if (max1 > max2 && max1 > max3) {
//         console.log(max1);
//     } else if (max2 > max1 && max2 > max3) {
//         console.log(max2);
//     } else {
//         console.log(max3);
//     }
// };
// Max(69.159,666, 159);

// - створити функцію яка повертає найбільше число з масиву
//  let array=[984,56,7]
// function Max(array) {
//     if (array[0] > array[1] && array[0] > array[2]) {
//         console.log(array[0]);
//     } else if (array[1] > array[0] && array[1] >array[2]) {
//         console.log(array[1]);
//     } else {
//         console.log(array[2]);
//     }
// };
// Max(array);

// - створити функцію яка повертає найменьше число з масиву

// let array = [8643, 762547, 453, 5, 45, 56, -43]

// function min(minArray) {
//     let minnum = minArray[0]
//
//     for (let i = 0; i < minArray.length; i++) {
//         if (minArray[i] < minnum) {
//             minnum = minArray[i]
//         }
//     }
//     return minnum
// }
//
// let myNum = min(array)
//
// console.log(myNum)
// ================================================================
// function min(MinArr) {
//     let minnum = MinArr[0]
//
//     for (let i = 0; i < MinArr.length; i++) {
//         if (MinArr[i] < minnum) {
//             minnum = MinArr[i]
//         }
//     }
//     return minnum
// }
//
// console.log(min(array));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

//let arr = [3,2,5,6];
// function arraySum(array){
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     console.log(sum);
// }
// arraySum(arr);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [3, 2, 5, 6];
//
// function arrayNum(num) {
//     let sum = 0
//     for (let i = 0; i < num.length; i++) {
//         sum += num[i];
//     }
//     console.log(sum/arr.length);
//
// }
// arrayNum(arr)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function arrayNum() {
//     let min = arguments[0];
//     let max = arguments[1];
//     for (const element of arguments) {
//         if (element > max) max = element;
//         if (element < min) min = element;
//     }
//     console.log("max: ", max);
//     return min;
//
// }
//
// arrayNum(4, 5, 6, 7, 5, 56, 56, 76)


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function arr(ArrNum) {
//     let array = []
//     for (let i = 0; i < ArrNum; i++) {
//         array.push(Math.floor(Math.random() * 100));
//     }
//     return array
// };
//
// document.write(arr(9))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function arr(limit) {
//     let result = Math.round(Math.random() * limit) ;
//     return result;
// }
// let x = arr(9);
// let x2 = arr(250)
// console.log(x, x2)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let array = [2, 17, 13, 6, 22];

function name(ret) {
    let newArr = [];

    for (let i = ret.length - 1; i > 0; i--) {
        newArr[newArr.length] = ret[i]
    }

    return newArr;
}

console.log(name(array))