// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Cars(model, proizvoditel, years, max, volum) {
//     this.model = model;
//     this.proizvoditel = proizvoditel;
//     this.years = years;
//     this.max = max;
//     this.volum = volum;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.max} на годину`);
//     };
//     this.info = function () {
// console.log(`Инфа про автмобиль :  model ${this.model},  proizvoditel ${this.proizvoditel}, years ${this.years},  max ${this.max}, volum ${this.volum}`)
//     };
//     this.newMaxSpeed = function (newSpeed) {
//         console.log(this.max = this.max + newSpeed) ;
//     };
//     this.changeYear = function (newValue) {
//         console.log(this.years = newValue);
//     };
//     this.addDriver = function (driver) {
//         console.log(this.driver = driver);
//     };
// }
// let newCar = new Cars('Reno', 'Francuze', 2014, 250, 1.6);
// newCar.drive();
// newCar.info();
// newCar.newMaxSpeed(10);
// newCar.drive();
// newCar.changeYear(2015)
// newCar.info();
// newCar.addDriver('Nukutos')
// console.log(newCar);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars {
//     constructor(model, proizvoditel, years, max, volum) {
//         this.model = model;
//         this.proizvoditel = proizvoditel;
//         this.years = years;
//         this.max = max;
//         this.volum = volum;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.max} на годину`);
//     }
//     info() {
//         for (const key in this) {
//             console.log(`${key} - ${this[key]}`)
//         }
//     }
//     newMaxSpeed (newSpeed) {
//         this.max += newSpeed;
//     }
//     changeYear (newValue) {
//         this.years = newValue;
//     }
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// let newCar = new Cars('Reno', 'Francuze', 2014, 250, 1.6);
// newCar.drive();
// newCar.info();
// newCar.newMaxSpeed(10);
// newCar.drive();
// newCar.changeYear(2015)
// newCar.info();
// newCar.addDriver('Nukutos')
// console.log(newCar);
//


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class zolushka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

const array = [
    new zolushka('Никитыч', 45, 40),
    new zolushka('Никитычна', 89, 34),
    new zolushka('Гио', 42, 46),
    new zolushka('Диана', 4, 31),
    new zolushka('Шота', 18, 36),
    new zolushka('Вася', 22, 45),
    new zolushka('Макаронна', 26, 42),
    new zolushka('Фрикаделла', 30, 44),
    new zolushka('Золушка', 14, 28),
    new zolushka('Чешир', 20, 38)

];
console.log(array)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Princ {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

const prince = new Princ('Принц', 18, 28);


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
const princZola = (array, prince) => {
    for (const item of array) {
        if (item.size === prince.size) {
            return `Поздравляю цель обнаружена: ${item.name}`
        }
    }
};
console.log(princZola(array, prince))


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const Zol = array.find((item) => item.size === prince.size)
console.log(Zol)
