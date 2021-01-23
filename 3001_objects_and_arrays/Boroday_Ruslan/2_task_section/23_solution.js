/*2.3. Переменная language может принимать 2 значения: 'ru' или 'en'. Если она имеет значение 'ru', то
в переменную message запишите сообщение Хорошего дня!, а если имеет значение 'en' – то это же
сообщение, но на английском (Have a nice day!). Выведите message.
Решите задачу через if и через switch-case.*/

let language = prompt("Choose the language");
let message = "";

//1
switch (language) {
    case "ru":
        message = "Хорошего дня!";
        break;
    
    case "en": 
        message = "Have a nice day!";
        break;

    default: 
        message ="Input error!";
}

console.log(message);


//2
if (language !== "ru" && language !== "en") {
    throw "Input error!";
}

if (language === "ru") {
    message = "Хорошего дня!";
} else {
    message = "Have a nice day!";
}

console.log(message);