function whileFirstTask(value) {
    if (typeof value != "number" || isNaN(value)) {
        throw "Input error";
    }
    let i = 0;
    while (i < value) {
        console.log("#");
        i++;
    }
}

//let userFirstValue = Number(prompt("Enter your value"));
//whileFirstTask(userFirstValue);

function whileSecondTask(value) {
    let i = value;
    while (i >= 0)
    {
        console.log(i);
        i--;
    }
}

//whileSecondTask(userFirstValue);
//let userSecondValue = Number(prompt("Enter your value"));

function whileThirdTask(value, degree) {
    if (degree == 0)
    {
        return 1;
    }
    if (value == 0)
    {
        return 0;
    }
    let i = degree;
    let newValue = value;
    while (i > 1)
    {
        newValue *= value;
        i--;
    }
    return newValue;
}

//console.log(whileThirdTask(userFirstValue, userSecondValue));


function whileFourthTask(firstValue, secondValue) {
    let i = 0;

    while (true) {
        if (i > firstValue || i > secondValue) {
            break;
        }
        if (firstValue % i === 0 && secondValue % i === 0) {
            console.log(i);
        }    
        i++;
    }
}

//whileFourthTask(userFirstValue, userSecondValue);


function whileFactorial(value) {
    if (value === 1 || value === 0) {
        return 1;
    }
    let factorial = 1;
    let i = value; 
    while (i > 1) {
        factorial *= i;
        i--;
    }
    return factorial;
}

//console.log(whileFactorial(userFirstValue));


//DO WHILE 

let value;

function findValue() {
    do  {
        value = Number(prompt("Введите решение выражения 2 + 2 * 2"));
    } while ((value !== 6 ))
    console.log("Правильно!");
}

//findValue();


function doWhileDiv() {
    let number = 1000;
    let i = 0;
    do {
        number /= 2;
        i++;
    } while (number >= 50)
    console.log("Число:" + number + "\nКол-во итераций:" + i)
}

//doWhileDiv();


//FOR
//value = Number(prompt("Enter your value"));

function forShowNumbers(value ) {
    for (let i = 1; i <= 100; i++)  {
        if (i % value == 0) {
            console.log(i);
        }
    }
}

//forShowNumbers(value);


let lowLimit = Number(prompt("Enter first value"));
let upperLimit = Number(prompt("Enter second value"));
function showFourthNumber(firstValue, secondValue) {
    for (let i = firstValue; i < secondValue; i++){
        if (i % 4 == 0) {
            console.log(i);
        }
    }
}


showFourthNumber(lowLimit, upperLimit);




function IsPrime(number) {

    //     if (typeof number !== "number" || number < 2) {
    //         throw "number is incorrect";
    //     }
    //     else if (number === 2)
    //     {
    //         return true;
    //     }
    //     for (let i = 2; i < number; i++) {
    //         if (number % i === 0) {
    //             return false;
    //         }
    //     }
    
    //     return true;
    // }