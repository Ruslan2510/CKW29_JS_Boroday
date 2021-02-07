/*1. Написать функцию возведения числа в степень.*/

let value = Number(prompt("Enter your value"));
let count = Number(prompt("Enter degree"))

function pow(userValue) {
    if (count <= 1) {
        return userValue;
    } 
    count--;
    return pow(userValue) * userValue;
}

console.log(pow(value));