// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content"
let id = document.getElementById("content");

// -- отримує текст з блоку з id "rules"
let idrules = document.getElementById("rules");

// -- замініть текст параграфа з id 'content' на будь-який інший
id.innerText = "шо там?";

// -- замініть текст параграфа з id 'rules' на будь-який інший

idrules.innerText = "шо там?||part 2";

// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
let idrule = document.querySelectorAll('body> *');

for (const idruleElement of idrule) {
    idruleElement.style.background = 'red';
    idruleElement.style.color = 'blue'; // спасибо, сочетание цветов отменное! глаза вытекли почти сразу! XD
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classList = idrules.classList;
console.log(classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let clasrules = document.getElementsByClassName("fc_rules");
for (const classListElement of clasrules) {
    classListElement.style.color = 'red';
}

