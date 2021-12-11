// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// const name = document.forms.user.name;
// const age = document.forms.user.age;
// const button = document.getElementById('button');
// const key = 'key';
//
// const form = (name, age) => {
//    const user = {
//         name: name,
//         age: age
//     };
//     localStorage.setItem(key, JSON.stringify(user));
// };
//
// button.onclick = () => {
//     form(name.value, age.value);
// };



// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

const model = document.forms.car.model;
const type = document.forms.car.type;
const volume = document.forms.car.volume;
const button2 = document.getElementById('button');
const item = 'keyCar';

const form = (modelCar, typeCar, volumeCar) => {
    const arr = JSON.parse(localStorage.getItem(item)) || [];

    arr.push({modelCar, typeCar, volumeCar})
    localStorage.setItem(item, JSON.stringify(arr));
};

button2.onclick = () => {
    form(model.value, type.value, volume.value);
};