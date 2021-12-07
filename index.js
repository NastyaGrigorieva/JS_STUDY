// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
//
// const div1 = document.createElement('div');
// const form1 = document.createElement('form');
// const div2 = document.createElement('div')
// const form2 = document.createElement('form');
// const input1 = document.createElement('input');
// const input2 = document.createElement('input');
// const input3 = document.createElement('input');
// const input4 = document.createElement('input');
// const button1 = document.createElement('button');
// const button2 = document.createElement('button');
//
// form1.setAttribute('name', 'form1');
// form2.setAttribute('name', 'form2');
// input1.setAttribute('name', 'input1');
// input2.setAttribute('name', 'input2');
// input3.setAttribute('name', 'input3');
// input4.setAttribute('name', 'input4');
//
// button1.innerText = 'кнопачка 1';
// button2.innerText = 'кнопачка 2';
//
//
// document.body.appendChild(div1);
// document.body.appendChild(div2);
// div1.appendChild(form1);
// form1.appendChild(input1);
// form1.appendChild(input3);
// form1.appendChild(button1);
// div2.appendChild(form2);
// form2.appendChild(input2);
// form2.appendChild(input4);
// form2.appendChild(button2);
//
//
// button1.addEventListener('click', function (e){
//     e.preventDefault()
//     console.log(document.forms.form1[0].value);
//     console.log(document.forms.form1[1].value);
//
// });
// button2.addEventListener('click', function (event){
//     event.preventDefault()
//     console.log(document.forms.form2[0].value);
//     console.log(document.forms.form2[1].value);
//
// });

//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)

// let input1 = document.createElement('input');
// let input2 = document.createElement('input');
// let input3 = document.createElement('input');
// let button1 = document.createElement('button');
//
// button1.innerText = 'cоздай меня';
// document.body.append(input1, input2, input3, button1);
//
// button1.addEventListener('click', function () {
//     const tr = input1.value;
//     const td = input2.value;
//     const text = input3.value;
//
//     function table(tr, td, text) {
//         const divTable = document.createElement('div');
//         const table = document.createElement('table');
//
//
//         table.style.border = '1px solid blue';
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//
//         for (let i = 0; i < tr; i++) {
//             const tr = document.createElement('tr');
//             const td = document.createElement('td');
//             tr.style.border = '1px solid red';
//             for (let j = 0; j < td; j++) {
//
//                 td.style.bborder = '1px solid grey';
//                 td.innerText = `${text}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     table(tr, td, text);
// })
//


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

//
// const array = ['ля', 'барашка', 'неумелая'];
// const input = document.createElement('input');
// const button = document.createElement('button');
// button.innerText = 'кнопка';
// document.body.append(input, button);
//
// button.addEventListener('click', function () {
//     const valueInput = input.value;
//
//     for (let arr of array) {
//         if (arr === valueInput) {
//             alert('ну ты злой');
//             return;
//         }
//     }
//         alert('Красаучик');
// });


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


const array = ['бля','жирафик', 'барашка', 'неумелая'];
const input = document.createElement('input');
const button = document.createElement('button');
button.innerText = 'кнопка';
document.body.append(input, button);

button.addEventListener('click', function () {
    const valueInput = input.value;

    for (let word of array) {
        if (valueInput.includes(word)) {
            alert('ну ты злой');
            return;
        }
    }

        alert('Красаучик');

});

