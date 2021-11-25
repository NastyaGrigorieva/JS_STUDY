// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let line = 'hello world';
// console.log(line.length);
//
// let string = 'lorem ipsum';
// console.log(string.length);
//
// let str = 'javascript is cool';
// console.log(str.length)
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// const str = 'hello world';
// const str2 ='lorem ipsum';
// const str3 ='javascript is cool';
//
// newstr =  str.toUpperCase();
// console.log(newstr);
//
// newstr =  str2.toUpperCase();
// console.log(newstr);
//
// newstr =  str3.toUpperCase();
// console.log(newstr);

// - Перевести до нижнього регістру настипні стрінгові значення

//
// const str = 'HELLO WORLD';
// const str2 = 'LOREM IPSUM';
// const str3 = 'JAVASCRIPT IS COOL';
//
// newstr = str.toLowerCase();
// console.log(newstr);
//
// newstr = str2.toLowerCase();
// console.log(newstr);
//
// newstr = str.toLowerCase();
// console.log(newstr);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.length)
//  let trim = str.trim();
// console.log(trim)
// console.log(trim.length)

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

// let stringToarray = (str) => {
//     return str.split(' ');
// }
//
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.write(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// console.log(arr);
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.

// let delete_characters = (str, index) => {
//     return str.substr(0, index);
// };
// let str = 'Каждый охотник желает знать';
// document.write(delete_characters(str, 7)); // Каждый
//
//
// //
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.

// let insert_dash = (str) => {
//         let split = str.split(' ').join('-----').toUpperCase();
//         return split;
//     }
// let str = "HTML JavaScript PHP";
// document.write(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//

//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let string = (str) => {
//     return str[0].toUpperCase() + str.slice(1)
// };
//
// console.log(string('steh auf - Lindemann'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {

    return str[0].toUpperCase() + str.slice(1)
    // const replace = capitalize.replaceAll('a','A');
};
console.log(capitalize('steh auf - lindemann'));

// console.log(replace);

