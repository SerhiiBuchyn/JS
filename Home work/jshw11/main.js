// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

document.forms.form1.onsubmit = function (e) {
    e.preventDefault();
};

const btn1 = document.getElementById('btn1');
btn1.onclick = function () {
    const name = document.forms.form1.name.value;
    const age = document.forms.form1.age.value;
    localStorage.setItem('inputs', JSON.stringify({name, age}));
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

document.forms.form2.onsubmit = function (e) {
    e.preventDefault();
};

const btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    const model = document.forms.form2.model.value;
    const type = document.forms.form2.type.value;
    const volume = document.forms.form2.volume.value;
    localStorage.setItem('inputsForm2', JSON.stringify([model, type, volume]));

}