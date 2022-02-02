// - v Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями:
// - v назва товару
// - v кількість товару
// - v ціна товару
// - v картинка товару (посилання з інтернету)
// - v Зберігати товари в масив в локалсорадж. При збережені товару з форми,
// action не повинно відбуватись (preventDefault)

// - v створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html,
// при переході на який відобразити на сторінці всі товари.

// - v На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

document.forms.form1.onsubmit = function (e) {
    e.preventDefault();
};

let product = [];

const btnSave = document.getElementById('btn_save');
btnSave.onclick = function () {
    let name = document.forms.form1.name.value;
    let number = document.forms.form1.number.value;
    let price = document.forms.form1.price.value;
    let img = document.forms.form1.img.value;
    let id = Math.round(Math.random()* 10000000000);

    product.push({id, name, number, price, img});
    localStorage.setItem('products', JSON.stringify(product));

    document.forms.form1.name.value = '';
    document.forms.form1.number.value = '';
    document.forms.form1.price.value = '';
    document.forms.form1.img.value = '';
}

