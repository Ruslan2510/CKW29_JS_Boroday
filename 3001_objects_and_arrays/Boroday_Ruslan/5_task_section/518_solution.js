/*5.18 Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели
(понедельник - первый и т.д.). Пусть номер дня недели хранится в переменной day, например там лежит
число 3. Выведите день недели, соответствующий значению в переменной day.*/

let week = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье"
};

let day = Number(prompt("Enter day number from 1 to 7"));

if (day < 1 || day > 7) {
    throw "Incorrect input!";
}


console.log(week[day]);