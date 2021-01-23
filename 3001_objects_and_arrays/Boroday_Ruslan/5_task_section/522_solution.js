/*5.22  Сделайте функцию isInArray, которая определяет, есть ли в массиве элемент с заданой подстрокой
или нет. Функция первым параметром должна принимать текст, а вторым - массив, в котором делается
поиск. Функция должна возвращать true или false.*/

let array = ["It’s raining.", "Go outside!", "What are you doing?", "There is my house.", "I have to go to the university."];

function isInArray(str, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].includes(str)) {
            return true;
        }
    }
    return false;
}

console.log(isInArray("house", array));
