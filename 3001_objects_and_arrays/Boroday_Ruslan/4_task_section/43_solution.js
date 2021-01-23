/*4.3. Напишите функцию, которая отнимает от первого числа второе и делит на третье. Все три числа -
аргументы функции*/

let firstValue = Number(prompt("firstValue"));
let secondValue = Number(prompt("secondValue"));
let thirdValue = Number(prompt("thirdValue"));

function myFunc(firstValue, secondValue) {
    if (typeof firstValue !== "number" || isNaN(firstValue)) {
        throw "Error first value!";
    } 
    if (typeof secondValue !== "number" || isNaN(secondValue)) {
        throw "Error second value!";
    }
    if (typeof thirdValue !== "number" || isNaN(thirdValue)) {
        throw "Error second value!";
    }

    return (firstValue - secondValue) / thirdValue;
}

console.log(myFunc(firstValue, secondValue, thirdValue));