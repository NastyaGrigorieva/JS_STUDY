// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//   ==============================================================
let n1 = 'Harry..Potter'
let n2 = 'Ron-----#$%^&*--....-Whisley'
let n3 = 'Hermione_/_Granger'

const normalizer = (sring) => {
    let qwe = sring.split('');
    const badArray = '!@#$%^&*()_+=-[]{};:""/,.|*><'.split('');

    qwe = qwe.map((char, i) => {
        if (badArray.includes(char)) {
            return badArray.includes(qwe[i-1]) ? '' : ' ';
        }
        return char;
    })

    return qwe.join('');
}

console.log(normalizer(n1));
console.log(normalizer(n2));
console.log(normalizer(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let random = (index, num) => {
//     let array = [];
//     for (let i = 0; i < index; i++) {
//         array.push(Math.floor(Math.random() * num));
//     }
//     return array;
// };
// let result = random(18, 100);
// console.log(result);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

//  result.sort(( a, b ) =>  (a - b));
// console.log(result)
// result.sort(( a, b ) => ( b - a));
// console.log(result)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let filter = (index, num) => {
//     let array = [];
//     for (let i = 0; i < index; i++) {
//         array.push(Math.floor(Math.random() * num));
//     }
//     return array.filter(value => value % 2 === 0);
// };
// console.log(filter(8,98))

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let random = (index, num) => {
    let array = [];
    for (let i = 0; i < index; i++) {
        array.push(Math.floor(Math.random() * num));
    }
    return array.map(value => value.toString());
};
console.log(random(6, 96));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (array, direction) => {
    if (direction === 'ascending') return array.sort((a, b) => a - b);
    if (direction === 'descending') return array.sort((a, b) => b - a);
};
console.log(sortNums([5,56,4,46,7,8,546453,3536,7,56,9], 'descending'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// -- відсортувати його за спаданням за monthDuration

// let newSort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(newSort);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = coursesAndDurationArray.filter((value) => {
//     return value.monthDuration > 5;
// });


// console.log(filter)
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let string = (str, n) => {

};
document.write(string('наслаждение', 3))
