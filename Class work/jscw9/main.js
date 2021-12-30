let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.


// - взяти попередній масив з сімпсонами.Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
// Для кожної властивості елементу створити окремий блок, та помістити його у div.member


let wrapSimpsons = document.createElement('div');
wrapSimpsons.classList.add('wrapSimpsons');
document.body.appendChild(wrapSimpsons);

// for (const item of simpsons) {
//     let divMember = document.createElement('div');
//     divMember.classList.add('member');
//
//     let divName = document.createElement('div');
//     divName.classList.add('name');
//     divName.innerText = `name - ${item.name}`;
//
//     let divSurname = document.createElement('div');
//     divSurname.classList.add('surname');
//     divSurname.innerText = `surname - ${item.surname}`;
//
//     let divAge = document.createElement('div');
//     divAge.classList.add('age');
//     divAge.innerText = `age - ${item.age}`;
//
//     let info = document.createElement('p');
//     info.classList.add('info');
//     info.innerText = `info - ${item.info}`;
//
//     let img = document.createElement('img');
//     img.src = item.photo;
//
//
//     divMember.appendChild(divName);
//     divMember.appendChild(divSurname);
//     divMember.appendChild(divAge);
//     divMember.appendChild(info);
//     divMember.appendChild(img);
//     wrapSimpsons.appendChild(divMember);
// }


// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

let courses = document.createElement('div');
courses.classList.add('coursesWrap');
document.body.appendChild(courses);

for (const item of coursesArray) {
    let elementDiv = document.createElement('div');
    elementDiv.classList.add('element');
    elementDiv.style.display = 'column-gap';
    elementDiv.style.border = '1px solid red';
    elementDiv.style.margin = '10px';
    elementDiv.style.textAlign = 'center';

    let headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    let h2Title = document.createElement('h2');
    h2Title.innerText = `title - ${item.title}`;
    h2Title.style.border = '1px solid blue';
    h2Title.style.margin = '5px';
    h2Title.style.display = 'flex';
    h2Title.style.justifyContent = 'center';

    let content = document.createElement('div');
    content.classList.add('content');
    content.style.margin = '5px';
    content.style.display = 'flex';
    content.style.columnGap = '10px';

    let h3monthDuration = document.createElement('h3');
    h3monthDuration.innerText = `monthDuration - ${item.monthDuration}`;
    h3monthDuration.style.border = '1px solid blue';
    h3monthDuration.style.width = '30%';

    let h3hourDuration = document.createElement('h3');
    h3hourDuration.innerText = `hourDuration - ${item.hourDuration}`;
    h3hourDuration.style.border = '1px solid blue';
    h3hourDuration.style.width = '70%';

    let modulesElement = document.createElement('div');
    modulesElement.classList.add('modules');

    let ul = document.createElement('ul');
    ul.style.padding = '0px';

    for (const ulElement of item.modules) {
        let li = document.createElement('li');
        li.innerText = ulElement;
        li.style.border = '1px solid blue';
        li.style.margin = '5px';
        li.style.listStyle = 'none';
        ul.appendChild(li);

    }



    elementDiv.appendChild(headerDiv);
    elementDiv.appendChild(content);
    elementDiv.appendChild(modulesElement);
    content.appendChild(h3monthDuration);
    content.appendChild(h3hourDuration);
    modulesElement.appendChild(ul);
    headerDiv.appendChild(h2Title);

    courses.appendChild(elementDiv);
    document.body.appendChild(courses);
}