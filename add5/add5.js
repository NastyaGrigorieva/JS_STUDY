// - Дано натуральное число n. Выведите все числа от 1 до n.
// const natur = (n) => {
//     for (let i = 0; i < n; i++){
//         console.log(i)
//     }
//
// }
// natur(7)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,\
// если A < B, или в порядке убывания в противном случае.

// const natur = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i)
//         }
//     } else {
//         for (let i = a; i >= b; i--) {
//             console.log(i)
//         }
//     }
// }
// natur(32, 16)

// функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

//   EXAMPLE:

// const foo = (arr, number) => {
//     let num = arr[number];
//     let num2 = arr[number + 1];
//
//     arr[number] = num2
//     arr[number + 1] = num
//
//     console.log(arr)
// }
//
//
// foo([9, 8, 0, 4], 0) // ==> [ 8, 9, 0, 4 ]
//
// foo([9, 8, 0, 4], 1) // ==> [ 9 ,0, 8, 4 ]
//
// foo([9, 8, 0, 4], 2) // ==> [ 9, 8, 4, 0 ]

//

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульо

// const elements = (arr) => {
//     let v = []
//     for (let i = 0; i < arr.length; i++) {
//
//         if (arr[i] === 0) {
//             v.push(arr[i]);
//             arr.splice(i, 1);
//             i--
//         }
//     }
//     let c = [...arr, ...v]
//     console.log(c)
//     // console.log('без',arr)
//     // console.log(v)

// }


const elements = (arr) =>{
    let v = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] ===0) {
        v.push(arr[i]);
        arr.splice(i, 1);
        i--
    }
}
let c =[ ...arr,...v];
console.log(c);
}

elements([0, 0, 0, 0, 5, 5, 0, 0, 7, 5, 9, 0, 0, 8, 8, 1, 0])
elements([1, 0, 6, 0, 3])
elements([0, 1, 2, 3, 4])
elements([0, 0, 1, 0])
elements([0, 0, 0, 0, 5, 5, 0, 0, 7, 5, 9, 0, 0, 8, 8, 1, 0])
