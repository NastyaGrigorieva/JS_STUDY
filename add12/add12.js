// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста/

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const father = document.createElement('div');
        father.classList.add('father');

        for (const user of users) {
            const div = document.createElement('div');
            div.classList.add('block');
            div.innerHTML = ` <h2> id: ${user.id} </h2>
                              <h4> name: ${user.name} </h4>
                              <h3> username: ${user.username} </h3>
                              <h3> email: ${user.email} </h3>
                              <h3> phone: ${user.phone} </h3>
                              <h3> website: ${user.website} </h3>
                              <h3> city: ${user.address.city} </h3>  `;

            const button = document.createElement('button');
            button.innerText = 'пості'
            button.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        const postsWrapper = document.createElement('div');
                        postsWrapper.classList.add('postsWrapper');

                        for (const post of posts) {
                            const div = document.createElement('div');
                            div.classList.add('post');
                            div.innerHTML = ` <h2> id: ${post.id} </h2>
                              <h4> userId: ${post.userId} </h4>
                              <h3> id: ${post.id} </h3>
                              <h3> title: ${post.title} </h3>
                              <h3> body: ${post.body} </h3>  `;

                            const button = document.createElement('button');
                            button.innerText = 'cmments'
                            button.onclick = () => {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                    .then(response => response.json())
                                    .then(comments => {
                                        const commentsWrap = document.createElement('div');
                                        commentsWrap.classList.add('comments')
                                        for (const comment of comments) {
                                            const div = document.createElement('div');
                                            div.classList.add('comment');
                                            div.innerHTML = `  <h4> postId: ${comment.postId} </h4>
                                                               <h3> id: ${comment.id} </h3>
                                                               <h4> name: ${comment.name} </h4>
                                                               <h4> email: ${comment.email} </h4>
                                                               <h4> body: ${comment.body} </h4>    `;

                                            commentsWrap.appendChild(div);
                                        }
                                       postsWrapper.appendChild(commentsWrap);
                                    })

                            }
                            postsWrapper.appendChild(div);
                            div.appendChild(button);
                        }
                        father.appendChild(postsWrapper);
                    })
            }
            father.appendChild(div);
            div.appendChild(button);
        }


        document.body.appendChild(father);
    })


