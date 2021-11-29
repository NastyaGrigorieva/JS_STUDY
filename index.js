// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// const array = [
//     new User(1, 'Vas', 'Illiy', 'Vas@gmail.com', 7845692057),
//     new User(2, 'Vasis', 'Dash', 'Vas@gmail.com', 7845692057),
//     new User(3, 'Shota', 'Hlch', 'Vas@gmail.com', 7845692057),
//     new User(4, 'Gora', 'Ghelh', 'Vas@gmail.com', 7845692057),
//     new User(5, 'Vasya', 'jsldhkfuo', 'Vas@gmail.com', 7845692057),
//     new User(6, 'pkc', 'kjhj', 'Vas@gmail.com', 7845692057),
//     new User(7, 'Vljhkcd', 'Iky', 'Vas@gmail.com', 7845692057),
//     new User(8, 'feds', 'Idy', 'Vas@gmail.com', 7845692057),
//     new User(9, 'w', 'Iliy', 'Vas@gmail.com', 7845692057),
//     new User(10, 'Vasdc', 'khdgjy', 'Vas@gmail.com', 7845692057),
// ]
// console.log(array)


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// const filter = array.filter((item) => item.id % 2 === 0);
// console.log(filter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// const sort = array.sort((u1, u2) => u1.id -u2.id)
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const array = [
    new User(1, 'Vas', 'Illiy', 'Vas@gmail.com', 7845692057, ['oguretc']),
    new User(2, 'Vasis', 'Dash', 'Vas@gmail.com', 7845692057,['oguretc','pomidor', 'mango']),
    new User(3, 'Shota', 'Hlch', 'Vas@gmail.com', 7845692057,['oguretc','pomidor']),
    new User(4, 'Gora', 'Ghelh', 'Vas@gmail.com', 7845692057,['oguretc','pomidor', 'kapusta']),
    new User(5, 'Vasya', 'jsldhkfuo', 'Vas@gmail.com', 7845692057,['perchatki','pomidor', 'mango']),
    new User(6, 'pkc', 'kjhj', 'Vas@gmail.com', 7845692057,['oguretc','pomidor', 'mango','fotbolka']),
    new User(7, 'Vljhkcd', 'Iky', 'Vas@gmail.com', 7845692057,['oguretc', 'mango']),
    new User(8, 'feds', 'Idy', 'Vas@gmail.com', 7845692057,['fotbolka','pomidor', 'mango']),
    new User(9, 'w', 'Iliy', 'Vas@gmail.com', 7845692057,['fotbolka','mango']),
    new User(10, 'Vasdc', 'khdgjy', 'Vas@gmail.com', 7845692057,['nichego ne kupil,parazitus']),
]
console.log(array)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sort = array.sort((a, b) => a.order.length - b.order.length);
console.log(sort)