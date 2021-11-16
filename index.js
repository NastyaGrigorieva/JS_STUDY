// --створити масив з:
//     - з 5 числових значень
//
// let array=[1,2,3,4,5,]
// console.log(array)

// - з 5 стічкових значень
// let array= ['хелло','my','friend','okten','world']
// console.log(array);
// - з 5 значень стрічкового, числового та булевого типу

// let array= ['хелло',1,'friend',false,'world']
//     console.log(array)

// - та вивести його в консоль
//

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr=[];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 5;
// arr[3] = 56;
// arr[4] = 8;
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++){
    document.write(`<div>hj</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++){
    document.write(`<div>${i} -lsuiefbhk index </div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20 ){
//     document.write(`<h2>ibhg</h2>`);
//     i++
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let i = 0;
while (i < 20 ){
    document.write(`<h2>${i}jbh;ibhg</h2>`);
    i++
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array = [1,2,3,4,5,6,89,98,37777777,8437 ];
// for ( let arrayKey in array){
//     console.log(array[arrayKey])
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [' hello','menya','zovut','vasilii','i','ochen','ploxa','znay','angliiskyi','yazyk'];
// for ( let arrKey in arr){
//     console.log(arr[arrKey])
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [' hello',4,'zovut',true,'i','ochen','ploxa',69,'angliiskyi',96];
// for ( let arrKey in arr){
//     console.log(arr[arrKey])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи


//  let array = [' hello',4,'my',true,'i','one','ploxa',69,'kiev',96];
// for (i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'boolean') {
//         console.log(array[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let array = [' hello',4,'my',true,'i','one','ploxa',69,'kiev',96];
for (i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
        console.log(array[i]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arr =[' hello',4,'my',true,'city','the','kiev',69,'kiev.',96];
for (i = 0; i < arr.length; i++) {
  if( typeof arr[i] === 'string'){
      console.log(arr[i]);
  }
}



// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let arraynumber = [];
// arraynumber[0]= 67;
// arraynumber[1]= 75;
// arraynumber[2]= 583;
// arraynumber[3]= 38678;
// arraynumber[4]= 7867;
// arraynumber[5]= 'what';
// arraynumber[6]= 'hlvr';
// arraynumber[7]= 'ghrg';
// arraynumber[8]= 'yiu';
// arraynumber[9]= 'ukffffffkfyuyhgfy';
//
// for (i = 0; i < arraynumber.length; i++) {
//         console.log(arraynumber[i]);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=1; i < 11; i++){
//     console.log(i);
//     document.write(`${i}`)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++){
//     console.log('шаг : ' + i + ' ');
//     document.write('шаг : ' + i + ' ')
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+2){
// //     console.log('шаг : ' + i + ' ');
// //     document.write('шаг : ' + i + ' ')
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++){
//     if(i % 2 === 1){
//         console.log('шаг : ' + i + ' ');
//         document.write('шаг : ' + i + ' ')
//     }
// }
