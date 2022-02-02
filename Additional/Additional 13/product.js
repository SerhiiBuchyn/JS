//  v На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.

// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний товар

const key = 'products';
const products = JSON.parse(localStorage.getItem(key));

const productWrap = document.createElement('div');
productWrap.classList.add('product_wrap');

document.body.appendChild(productWrap);

for (const product of products) {


    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const name = document.createElement('h3');
    name.innerText = `${product.name}`;

    const number = document.createElement('h3');
    number.innerText = `${product.number}`;

    const price = document.createElement('h3');
    price.innerText = `${product.price}`;

    const img = document.createElement('img');
    img.src = `${product.img}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.id = 'delete_btn_product';
    deleteBtn.innerText = 'delete this product';
    deleteBtn.onclick = function () {

        let index = products.findIndex((productElement) => productElement.id === product.id);
        products.splice(index, 1);
        localStorage.setItem(key, JSON.stringify(products));
        window.location.reload();

    }

    productDiv.append(name, number, price, img, deleteBtn);
    productWrap.append(productDiv);
}

// 1. Pass id
// 2. const index = prodcuts.findIndex((product) => product.id === id) // 2
// 3. prodcuts.splice(index, 1);
// 4.setItem('prodcuts',prodcuts )

const cleanBtn = document.getElementById('clean_basket');

cleanBtn.onclick = function () {
    localStorage.setItem(key, JSON.stringify([]));
    window.location.reload();
}


