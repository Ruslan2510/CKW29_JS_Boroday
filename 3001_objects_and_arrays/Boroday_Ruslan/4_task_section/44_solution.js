/*4.4 Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на
русском языке.*/

let value = Number(prompt("Enter the value from 1 to 7"));

function dayOfTheWeek(day) {
    let result = "";
    switch (day) {
        case 1:
            result = "Понедельник";
            break;
        case 2:
            result = "Вторник";
            break;
        case 3:
            result = "Среда";
            break;
        case 4:
            result = "Четверг";
            break;
        case 5:
            result = "Пятница";
            break;
        case 6:
            result = "Суббота";
            break;
        case 7:
            result = "Воскресенье";
            break;
        default: 
            result = "Incorrect input";
    }
    return result;
}

console.log(dayOfTheWeek(value));