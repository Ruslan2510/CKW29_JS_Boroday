//1)

//let firstValue = Number(prompt("Enter first number"));
//let secondValue = Number(prompt("Enter second number"));
//let thirdValue = Number(prompt("Enter third number"));

function FirstTask(firstValue, secondValue) {
    if (typeof firstValue != "number" || typeof secondValue != "number" || isNaN(firstValue) || isNaN(secondValue)) {
        throw "Ошибка ввода!";
    }

    if (firstValue < secondValue) {
        return -1;
    } else if (firstValue > secondValue) {
        return 1;
    } else {
        return 0;
    }
}
//console.log(FirstTask(firstValue, secondValue));


//2)
function SecondTask(firstValue) {
    if (typeof firstValue != "number" || isNaN(firstValue) || firstValue < 0) {
        throw "Ошибка ввода!";
    }
    if (firstValue == 0 || firstValue == 1) {
        return 1;
    }
    let i = firstValue;
    let fact = 1;
    while (i >= 2) {
        fact *= i;
        i--;
    }
    return fact;
}
//console.log(SecondTask(firstValue));

//3)
function ThirdTask(firstValue, secondValue, thirdValue) {
    if (typeof firstValue != "number" || isNaN(firstValue)) {
        throw "Ошибка ввода!";
    }

    if (typeof secondValue != "number" || isNaN(secondValue)) {
        throw "Ошибка ввода!";
    }

    if (typeof thirdValue != "number" || isNaN(thirdValue)) {
        throw "Ошибка ввода!";
    }

    return firstValue * 100 + secondValue * 10 + thirdValue;
}

//console.log(ThirdTask(firstValue, secondValue, thirdValue));


//4)

function FourthTask(firstValue, secondValue) {

    console.log(firstValue);
    console.log(secondValue);
    if (typeof firstValue === "undefined") {
        return secondValue * secondValue;
    } else if (typeof secondValue === "undefined") {
        return firstValue * firstValue;
    }
    return firstValue * secondValue;
}


//5)

function PerfectNumber(value) {
    if (typeof value != "number" || isNaN(value)) {
        throw "Ошибка ввода!";
    }

    let sum = 0;
    i = 2;
    while (i < value) {
        if (value % i === 0) {
            sum += i;
        }
        i++;
    }
    sum += 1;
    if (sum === value) {
        return true;
    }
    return false;
}

//console.log(PerfectNumber(firstValue));

//6)

function FindPerfectNumber(firstValue, secondValue) {
    if (typeof firstValue != "number" || isNaN(firstValue)) {
        throw "Ошибка ввода!";
    }
    if (typeof secondValue != "number" || isNaN(secondValue)) {
        throw "Ошибка ввода!";
    }

    for (let i = firstValue; i < secondValue; i++) {
        if (PerfectNumber(i)) {
            console.log(i);
        }
    }
}

//FindPerfectNumber(firstValue, secondValue);

//7)

//let hours = prompt();

function GetTime(hours, minutes, seconds) {
    if (hours > 23 || hours < 0) {
        throw "Ошибка ввода кол-ва часов";
    }

    if (minutes < 0 || minutes > 59) {
        throw "Ошибка ввода кол-ва минут";
    }

    if (seconds < 0 || seconds > 59) {
        throw "Ошибка ввода кол-ва минут";
    }

    if (typeof minutes === "undefined" || minutes === " ") {
        minutes = "00";
    }

    if (typeof seconds === "undefined" || seconds === " ") {
        seconds = "00";
    }

    return hours + ":" + minutes + ":" + seconds;
}

//console.log(GetTime(hours));

//8)

let hours = Number(prompt("Введите кол-во часов"));
let minutes = Number(prompt("Введите кол-во минут"));
let seconds = Number(prompt("Введите кол-во секунд"));

function GetTimeSeconds(hours, minutes, seconds) {
    if (hours > 23 || hours < 0) {
        throw "Ошибка ввода кол-ва часов";
    }

    if (minutes < 0 || minutes > 59) {
        throw "Ошибка ввода кол-ва минут";
    }

    if (seconds < 0 || seconds > 59) {
        throw "Ошибка ввода кол-ва минут";
    }

    let secondsAmount = hours * 3600 + minutes + 60 + seconds;

    return secondsAmount;
}

//console.log(GetTimeSeconds(hours, minutes, seconds));

//9)

function ConvertSecondsToTime(seconds) {
    let hours = 0;
    while (seconds - 3600 >= 0) {
        seconds -= 3600;
        hours++;
    }
    let minutes = 0;
    while (seconds - 60 >= 0) {
        seconds -= 60;
        minutes++;
    }

    if (hours < 10) {
        hours  = "0" + hours;
    }

    if (minutes < 10) {
        minutes  = "0" + minutes;
    }

    if (seconds < 10) {
        seconds  = "0" + seconds;
    }

    return hours + ":" + minutes + ":" + seconds;
}

//console.log(ConvertSecondsToTime(seconds));


let secondHours = Number(prompt("Введите кол-во часов"));
let secondMinutes = Number(prompt("Введите кол-во минут"));
let secondSeconds = Number(prompt("Введите кол-во секунд"))


function GetTimeDifference(firstHours, firstMinutes, firstSeconds, secondHours, secondMinutes, secondSeconds) {
    let firstTime = GetTimeSeconds(firstHours, firstMinutes, firstSeconds);

    let secondTime = GetTimeSeconds(secondHours, secondMinutes, secondSeconds);

    if (firstTime > secondTime) {
        return ConvertSecondsToTime(firstTime - secondTime);
    }
    else {
        return ConvertSecondsToTime(firstTime - secondTime);
    }
}

console.log(GetTimeDifference(hours, minutes, seconds, secondHours, secondMinutes, secondSeconds));