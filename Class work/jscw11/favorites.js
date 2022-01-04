const wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

const favoritesKey = 'favorites'
const users = JSON.parse(localStorage.getItem(favoritesKey));

for (const user of users) {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    const favoriteContent = document.createElement('div');
    favoriteContent.classList.add('favoriteContent');
    favoriteContent.innerText = `name - ${user.name}, age - ${user.age}, status - ${user.status}`;

    userDiv.appendChild(favoriteContent);
    wrap.appendChild(userDiv);
}






