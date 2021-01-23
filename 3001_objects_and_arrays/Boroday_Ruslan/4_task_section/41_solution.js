/*4.1 Напишите функцию, которая возвращает куб числа. Число передается как аргумент.*/

let value = Number(prompt("Enter your value"));

function cubeNumber(value) {
    if (isNaN(value)) {
        throw "Incorrect input";
    }
    return value * value * value;
}

console.log(cubeNumber(value));