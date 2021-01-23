/*5.6. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и
возвращает сумму его цифр.*/

let value = Number(prompt("Enter the value"));

function getDigitsSum(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

console.log(getDigitsSum(value));