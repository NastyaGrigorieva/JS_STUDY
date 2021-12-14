// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

const form = document.forms.form;
const button = document.getElementsByTagName('button')[0];

button.onclick = (e) => {
    e.preventDefault()
    const newItem = {
        name: form.name.value,
        num: form.num.value,
        price: form.price.value,
        image: form.image.value
    }

    const response = localStorage.getItem('STORE');
    if (response){
        const data = JSON.parse(response)
        localStorage.setItem('STORE', JSON.stringify([...data, newItem ]));
    } else {
        localStorage.setItem('STORE', JSON.stringify([ newItem ]));
    }

    for (const input of form) {
        input.value = '';
    }
}

