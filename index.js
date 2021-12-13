// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         return response.json();
//     })
//     .then(posts => {
//         const father = document.createElement('div');
//         father.classList.add('father');
//         for (const post of posts) {
//             let div = document.createElement('div');
//             div.classList.add('post');
//             div.innerHTML = `
//                     <h3>id: ${post.id}</h3>
//                     <h4>title: ${post.title}</h4>
//                     <h5>body: ${post.body}</h5>
//                     `;
//             father.appendChild(div);
//             document.body.appendChild(father);
//         }
//     });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        const father = document.createElement('div');
        father.classList.add('wraper');
        for (const comment of comments) {
            const div = document.createElement('div');
            div.classList.add('comment');
            div.innerHTML = `
                        <h2>id: ${comment.id}</h2>
                        <h2>name: ${comment.name}</h2>
                        <h2>email: ${comment.email}</h2>
                        <h4>body: ${comment.body}</h4>
                        `;
            father.appendChild(div);
            document.body.appendChild(father);
        }
    })