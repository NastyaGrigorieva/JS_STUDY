// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// const clik = document.getElementById('text');
// const button = document.getElementById('button');
// button.onclick = function () {
//     clik.style.display = 'none';
// }

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const button = document.getElementById('button');
// button.onclick = function () {
//     button.style.display = 'none';
// };


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// document.getElementById('button').onclick = function () {
//   const age =   document.getElementById('age').value;
//     if (!age) {
//         alert('а где собсна возраст');
//     } else if (+age < 18) {
//         alert('маловато будет');
//     }else if (+age < 21) {
// //         alert('староват');
// //     } else {
//         alert('Здарова');
//     }
// };


// - Создайте меню, которое раскрывается/сворачивается при клике
//
// const menu = document.querySelector('.menu');
// const title = menu.querySelector('.title');
//
// title.onclick = function () {
//     menu.classList.toggle('hidden');
// };


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

const comments = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
]
let divFather = document.createElement('div');
for (const item of comments) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const btn = document.createElement('button');

    h2.innerText = item.title;
    p.innerHTML = item.body;
    btn.innerHTML = 'тыкнуть'

    div.append(h2, p, btn);
    divFather.append(div);
}
document.body.appendChild(divFather)



