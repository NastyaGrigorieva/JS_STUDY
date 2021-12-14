//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        const father = document.createElement('div');
        father.classList.add('father');
        for (const post of posts) {
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `
                        <h3>id: ${post.id}</h3>
                        <h4>title: ${post.title}</h4>
                        <h5>body: ${post.body}</h5>
                        `;
            const button = document.createElement('button');
            button.innerText = 'ткни сюды';
            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {

                            if (post.id === comment.postId) {
                                const divCard = document.createElement('div');
                                divCard.classList.add('cardComments');
                                divCard.innerHTML = `
                                        <h2>id: ${comment.id}</h2>
                                        <h2>name: ${comment.name}</h2>
                                        <h2>email: ${comment.email}</h2>
                                        <h5>body: ${comment.body}</h5>
                                        `;
                                div.appendChild(divCard)
                            }
                            button.disabled = true;
                        }
                    })
            }
            div.appendChild(button);
            father.appendChild(div);
            document.body.appendChild(father);
        }
    });
