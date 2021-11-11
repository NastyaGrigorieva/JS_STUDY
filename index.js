// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let a;
// a = 'hello';
// console.log(a);
// alert(a);
// document.write(a)
// let b;
// b = 'owu';
// console.log(b);
// alert(b);
// document.write(b)
// let c;
// c = 'com';
// console.log(c);
// alert(c);
// document.write(c);
// let d;
// d = 'ua';
// console.log(d);
// alert(d);
// document.write(d);
// let e;
// e = 1;
// console.log(e);
// alert(e);
// document.write(e);
// let f;
// f = 10;
// console.log(f);
// alert(f);
// document.write(f);
// let g;
// g = -999;
// console.log(g);
// alert(g);
// document.write(g);
// let h;
// h = 3.14;
// console.log(h);
// alert(h);
// document.write(h);
// let i;
// i = 2.7;
// console.log(i);
// alert(i);
// document.write(i);
// let j;
// j = 16;
// console.log(j);
// alert(j);
// document.write(j);
// let k;
// k = 16;
// console.log(k<g);
// alert(k<g);
// document.write(k<g);
// let l;
// l = 2;
// console.log(l>e);
// alert(l>e);
// document.write(l>e);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let a = 'hello';
// a = 'Привет';
// console.log(a);
// alert(a);
// document.write(a)
// let b='owu';
// b = 'меня';
// console.log(b);
// alert(b);
// document.write(b)
// let c ='com';
// c ='зовут' ;
// console.log(c);
// alert(c);
// document.write(c);
// let d='ua';
// d = 'Витя';
// console.log(d);
// alert(d);
// document.write(d);
// let e = 1;
// e = ' и мне надо выйти';
// console.log(e);
// alert(e);
// document.write(e);
// let f = 10;
// f = 2 ;
// console.log(f);
// alert(f);
// document.write(f);
// let g = -999;
// g = 999;
// console.log(g);
// alert(g);
// document.write(g);
// let h = 3.14;
// h = 2.15;
// console.log(h);
// alert(h);
// document.write(h);
// let i= 2.7;
// i = 37;
// console.log(i);
// alert(i);
// document.write(i);
// let j= 16;
// j = 7 ;
// console.log(j);
// alert(j);
// document.write(j);
// let k = 8 ;
// k= 9 ;
// console.log(k<g);
// alert(k<g);
// document.write(k<g);
// let l= 2;
// l = 3;
// console.log(l<e);
// alert(l<e);
// document.write(l<e);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let person={firstName:"Анастасия",middleName:"Анатольевна",lastName:"Григорьева", age:20};
console.log(person.firstName);
console.log(person.middleName);
console.log(person.age);

console.log(' Вітаю ' + person.firstName + "    " + person.middleName + '.  ' + person.age + ' років');
console.log(` Вітаю ${person.firstName} ${person.middleName}. Тобі ${person.age} років` )





// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// let a = 100;
// console.log(typeof a);
// let b = '100';
// console.log(typeof b);
// let c = true;
// console.log(typeof c);


// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
  //     5 ? 6 -> true
// let a = 5;
// let b = 6;
// console.log(a<b);

   // 5 ? 6 -> false
// let c = 5;
// let d = 6;
// console.log(c>d);

    // 5 ? 6 -> false
// let a = 5;
// let b = 6;
// console.log(a===b);

// 5 ? 6 -> false
// let a = 5;
// let b = 6;
// console.log(a>=b);

// 10 ? 10 -> true
// let a = 10;
// let b = 6;
// console.log(a===a);

// 10 ? 10 -> true
// let a = 10;
// console.log(a>=a);

// 10 ? 10 -> false
// let a = 10;
// console.log(a < a);

// 10 ? 10 -> false
// let a = 10;
// console.log(a > a);

// 10 ? 10 -> false
// let a = 10;
// console.log(a !== a);

// 123 ? '123' -> false
// let b = 123;
// let a = '123';
// console.log(b > b);


// 123 ? '123' -> true
// let b = 123;
// let a = '123';
// console.log(b == b);

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a = 5;
document.write(str + a + "<br/>"); //str = "20" + (a = 5) = 205 подставление переменных рядом
document.write(str - a + "<br/>");//str = "20" - (a = 5) = 15 за счет минуса, который превращает строку в уравнение
document.write(str * "2" + "<br/>"); //str = "20" * 2 = 40 за счет * по итогу получаем пример
document.write(str / 2 + "<br/>"); //str = "20" / 2 = 10 за счет деления получаем пример