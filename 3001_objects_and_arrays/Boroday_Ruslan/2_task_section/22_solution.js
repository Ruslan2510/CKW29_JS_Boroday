/*2.2. В переменной minutes лежит число от 0 до 59 (количество минут). Определите в какую четверть часа
попадает это число (в первую, вторую, третью или четвертую).*/

let value = Number(prompt("Enter your value from 0 to 59"));

if (value < 0 || value > 59) {
    throw "Ошибка ввода";
}

if (value <= 15) {
    console.log("Первая четверть часа.");
} else if (value <= 30) {
    console.log("Вторая четверть часа.");
} else if (value <= 45) {
    console.log("Третья четверть часа.");
} else {
    console.log("Последняя четверть часа.");
}