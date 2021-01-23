/*4.2. Напишите функцию, которая возвращает сумму двух чисел. Числа передаются как аргументы.*/

let firstValue = Number(prompt("firstValue"));
let secondValue = Number(prompt("secondValue"));

function Add(firstValue, secondValue) {
    if (typeof firstValue !== "number" || isNaN(firstValue)) {
        throw "Error first value!";
    } 
    if (typeof secondValue !== "number" || isNaN(secondValue)) {
        throw "Error second value!";
    }

    return firstValue + secondValue;
}

console.log(Add(firstValue, secondValue));