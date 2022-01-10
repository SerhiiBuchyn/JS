

// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// const wrapPost = document.getElementsByClassName('wrap_post')[0];
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(posts => posts.json())
//     .then(posts => {
//         for (const post of posts) {
//             const divPost = document.createElement('div');
//             divPost.classList.add('div_post');
//
//             const userId = document.createElement('h5');
//             userId.classList.add('user_id');
//             userId.innerText = `user id - ${post.userId}`;
//
//             const postId = document.createElement('h5');
//             postId.classList.add('post_id');
//             postId.innerText = `post id - ${post.id}`;
//
//             const title = document.createElement('h5');
//             title.classList.add('title');
//             title.innerText = `title - ${post.title}`;
//
//             const body = document.createElement('p');
//             body.classList.add('body');
//             body.innerText = `${post.body}`;
//
//             divPost.append(userId, postId, title, body);
//             wrapPost.append(divPost);
//         }
//
//     });

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

const wrapComments = document.createElement('div');
wrapComments.classList.add('wrap_comments');
document.body.appendChild(wrapComments);

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(comments => comments.json())
    .then(comments => {
        for (const comment of comments) {
            const divComment = document.createElement('div');
            divComment.classList.add('div_comment');
            divComment.innerHTML = `
            <h3>ID: ${comment.id}</h3>
            <h4>Name: ${comment.name}</h4>
            <h5>Email: ${comment.email}</h5>
            <h6>Body: ${comment.body}</h6>`

            wrapComments.appendChild(divComment);
        }
    });
