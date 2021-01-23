/*2.6. Переменная season может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в
переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Выведите result.
Решите задачу через switch-case.*/

let season = prompt("Enter your value from 1 to 4");
let result = "";

switch (season) {
    case "1":
        result = "зима";
        break;
    case "2":
        result = "весна";
        break;
    case "3":
        result = "лето";
        break;
    case "4":
        result = "осень";
        break;
    default:
        result = "Incorrect input!";
        break;
}

console.log(result);