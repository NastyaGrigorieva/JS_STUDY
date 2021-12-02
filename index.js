// Все робити за допомоги js.
// - створити блок,
// const div = document.createElement('div');
//     - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap');
// div.classList.add('collapce');
// div.classList.add('alpha');
// div.classList.add('beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.padding = "20px";
// div.style.margin = "5px";
// div.style.background = "blue";
// div.style.color = "gray";
// // - додати цей блок в body.
// document.body.appendChild(div);
// - клонувати його повністю, та додати клон в body.
//
// document.body.appendChild(div.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву
// створює li та додає його до блоку .menu
// Завдання робити через цикли.

// const ul = document.getElementsByClassName('menu')[0];
// const arrSrt = ['Main','Products','About us','Contacts'];
// for (item of arrSrt) {
//     const li = document.createElement('li');
//     li.innerText = item;
//     ul.appendChild(li);
//
// };
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
//  let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const arrayElement of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     const h2 = document.createElement('h2');
//     h2.innerText = `${arrayElement.title} - ${arrayElement.monthDuration}`;
//
//     div.appendChild(h2);
//     document.body.appendChild(div);

// };;;;;;;;;;;; // это на всякий случай;


//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const arrayElement of coursesAndDurationArray) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    div.classList.add('item');
    h2.classList.add('heading');
    p.classList.add('description');

    p.innerText = arrayElement.monthDuration;
    h2.innerText = arrayElement.title;

    div.append(h2, p);
    document.body.append(div);
}