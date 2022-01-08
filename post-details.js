const params = new URLSearchParams(location.search).get('userId');
const id = JSON.parse(params);


fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(value => value.json())
    .then(posts => {
        const postsWrap = document.getElementsByClassName('posts-wrap')[0];
        for (const post of posts) {
            const div = document.createElement('div');
            const title = document.createElement('h2');
            const body = document.createElement('p');
            const button = document.createElement('button');


            div.classList.add('father');
            title.classList.add('title');
            body.classList.add('parag');
            button.classList.add('btn');


            title.innerText = post.title;
            body.innerText = post.body;
            button.innerText = 'comments';

            div.appendChild(title);
            div.appendChild(body);
            div.appendChild(button);
            button.onclick = () => {
                button.style = 'display: none'

                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value => value.json())
                    .then(comments => {
                        const ulList = document.getElementsByTagName('ul');
                        for (const u of ulList) {
                            u.innerText = '';
                        }
                        const ul = document.createElement('ul');

                        for (const comment of comments) {
                            const li = document.createElement('li');
                            li.innerText = comment.name;
                            ul.appendChild(li);
                        }
                        div.appendChild(ul);

                    })
            };

            postsWrap.appendChild(div);
        }

    })