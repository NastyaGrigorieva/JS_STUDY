const params = new URLSearchParams(location.search).get('user');

let user = {};
if (params) user = JSON.parse(params);

const usersList = document.getElementsByClassName('users')[0];


const recurs = (object) => {
    for (const item in object) {
        if (typeof object[item] === "object") {
            return recurs(object[item])
        }

        const div = document.createElement('div');
        div.classList = ('elementDetails');
        div.innerText = `${item}: ${object[item]}`;
        usersList.appendChild(div);
    }

    const button = document.createElement('button');
    button.classList = 'buttons';
    button.innerText = 'post of current user';
    usersList.appendChild(button);
    button.onclick = () => location.href = `post-details.html?userId=${user.id.toString()}`;
}

recurs(user);