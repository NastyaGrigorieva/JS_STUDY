const favorites = 'favorites';
const container = document.getElementById('container');
const users = JSON.parse(localStorage.getItem(favoritesKey));

users.forEach(user => {
    const div = document.createElement('div');
    div.className = 'user';
    const content = document.createElement('div');
    content.innerText = `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`;
    div.appendChild(content);
    container.appendChild(div);
})