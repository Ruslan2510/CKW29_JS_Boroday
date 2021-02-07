/*5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
Например: число 18 – множители 2 * 3 * 3.*/

function allMul(number, k) {
    // k- дополнительный параметр. При вызове должен быть равен 2
    // Базовый случай
    if (k > number / 2) {
        console.log(number);
        return;
    }
    // Шаг рекурсии / рекурсивное условие
    if (number % k === 0) {
        console.log(k);
        allMul(number / k, k);
    } // Шаг рекурсии / рекурсивное условие
    else {
        allMul(number, ++k);
    }
}

allMul(18, 2);