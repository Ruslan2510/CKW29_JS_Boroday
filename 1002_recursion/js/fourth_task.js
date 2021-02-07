/*4. Написать функцию, которая определяет простое ли переданное число.*/

function isSimple(number, i) {
    // i- дополнительный параметр. При вызове должен быть равен 2
    // Базовый случай 
    if (number < 2) {
        return false;
    } // Базовый случай 
    else if (number === 2) {
        return true;
    } // Базовый случай 
    else if (number % i === 0) {
        return false;
    } // Шаг рекурсии / рекурсивное условие
    else if (i < number / 2) {
        return isSimple(number, i + 1);
    } else {
        return true;
    }
}

console.log(isSimple(23, 2));