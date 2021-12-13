// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву
// favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

const favorites = 'favorites';
localStorage.setItem(favorites, JSON.stringify([]));
const container = document.getElementById('container');

users.forEach(user => {
    const div = document.createElement('div');
    div.className = 'user';
    const content = document.createElement('div');
    content.innerText = `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`
    const btn = document.createElement('button');
    btn.innerText = 'Тыкнуть';
    btn.onclick = () => {
        const favorit = JSON.parse(localStorage.getItem(favorites));
        favorit.push(user);
        localStorage.setItem(favorites, JSON.stringify(favorit));
        btn.disabled = true;
    }
    div.append(content, btn);
    container.appendChild(div);
})