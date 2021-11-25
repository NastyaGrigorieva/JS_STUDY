// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на
// 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com


//


let normalizator = (str) => {
    if (!str.includes('@')) ;
    console.log('ne vkl @')
    let a = str.split('@')[1].split('.')[0];
    if (a.length < 2)
        console.log('ot @ do .')
    let b = str.split('@')[0];
    if (b.length < 1) {
        console.log('malo malo malo sumvolov')
    }
}
normalizator('someeMAIL@i.ua');
// normalizator('cabik@ws.com')
// normalizator('KABAN@ws.com')
// normalizator('cabikws.com')
// normalizator('cabik@w.com')
// normalizator('@ws.com')


// - є масивlet
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
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let sort = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
console.log(sort);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.

// const count = (str, stringsearch) => {
//     let arr = stringsearch.toLowerCase().split('').filter(a => a === str)
//
//     return arr.length;
// }
//
// console.log(count("а", "Астрономия это наука о небесных объектах"));


//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let cutString = (str, n) => {
    let arr = str.split(' ');

    if(arr.length > n) {
        arr = arr.slice(0, n);
    }

    return arr.join(' ')
}
document.writeln(cutString("Сила тяжести приложена к центру масс тела", 5))