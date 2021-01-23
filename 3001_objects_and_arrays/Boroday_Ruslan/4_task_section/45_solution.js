/*4.5. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно
больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.*/

let value = Number(prompt("Enter the value"));

function isNumberInRange(number) {
    if (typeof number !== "number" || isNaN(number)) {
        throw "Error value!";
    } 

    if (number > 0 && number < 10) {
        return true;
    }
    return false;
}

console.log(isNumberInRange(value));