/*4.7. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и
проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.*/

let value = Number(prompt("Enter the value"));

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}

console.log(isEven(value));