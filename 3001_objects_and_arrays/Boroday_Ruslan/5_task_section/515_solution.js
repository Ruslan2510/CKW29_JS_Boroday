/*5.15. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым
параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов
должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].*/

function arrayFill(symbol, number) {
    let array = [];
    for (let i = 0; i < number; i++) {
        array[i] = symbol;
    }
    return array;
}

console.log(arrayFill('=', 10));