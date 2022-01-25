// В index.html
// v 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// v 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// v 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-detailsUser.html,
// которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            const {id, name} = user;
            const wrap = document.getElementById('users_wrap');
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');

            userDiv.innerHTML = `
            <h3>ID: ${id}</h3>
            <h3>Name: ${name}</h3>`;

            const userBtn = document.createElement('button');
            userBtn.id = 'user_btn';
            userBtn.innerText = 'user details';
            userBtn.onclick = function () {
                localStorage.setItem('details', JSON.stringify(user));
                window.location.href = 'detailsUser.html?id=' + id;
            }
            userDiv.append(userBtn);
            wrap.appendChild(userDiv);
        }
    });


// На странице user-detailsUser.html:
// v 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// V 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// v 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-detailsUser.html,
// которая имеет детальную информацию про текущий пост.


// На странице post-detailsUser.html:
// v 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// v 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


// Стилизация проекта -
// v index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// v user-detailsUser.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-detailsUser.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так,
// что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
