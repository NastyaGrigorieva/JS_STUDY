// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html
// в окремий масив .масив вивести в консоль

const body = document.getElementsByTagName('body')[0];
const array = [];

function recur(element, array) {
    if (element.classList.length){
        array.push(...element.classList)
    }

    if(element.children.length){
        for (const child of element.children) {
            recur(child, array)
        }
    }
}

recur(body, array)


console.log(array)
// console.log(new Set(array))


// const arrrr = [1,4,[6,5],7, [3,5,6,3,[4,4,4,4,[5,[6]],7,5]]]
// console.log(arrrr)
// console.log(arrrr.flat(3))