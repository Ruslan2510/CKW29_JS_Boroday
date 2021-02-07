/*3. Написать функцию для поиска максимальной цифры в числе.*/

let value = Number(prompt("Enter your value"));


function findBiggestDigit(value, maxDigit) {
    if (value < 10 && value >= 0) {
        if (maxDigit === undefined || maxDigit < value) {
            return value;
        }

        return maxDigit;
    }

    
    const lastDigit = value % 10;
    value -= lastDigit;
    value /= 10;

    if (maxDigit === undefined) {
        maxDigit = lastDigit;
    } else if (lastDigit > maxDigit) {
        maxDigit = lastDigit;
    }

    return findBiggestDigit(value, maxDigit);
}

console.log(findBiggestDigit(value));