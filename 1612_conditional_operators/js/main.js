let choice = Number(prompt("Choose task number:"))

switch (choice) {

    case 1:
        let firstTaskValue = Number(prompt("Enter your age: "));
        if (firstTaskValue >= 0 && firstTaskValue < 12) {
            console.log("Вы ребенок");
        } else if (firstTaskValue >= 12 && firstTaskValue < 18) {
            console.log("Вы подросток") ;
        } else if (firstTaskValue >= 18 && firstTaskValue < 60) {
            console.log("Вы взрослый"); 
        } else if (firstTaskValue >= 60) {
            console.log("Вы пенсионер"); 
        }
        break;

    case 2:
        //задание 2
        let secondTaskValue = Number(prompt("Enter your value: "));
        switch(secondTaskValue) {
            case 0:
                console.log(")");
                break;

            case 1:
                console.log("!");
                break;

            case 2:
                console.log("@");
                break;

            case 3:
                console.log("#");
                break;

            case 4:
                console.log("$");
                break;

            case 5:
                console.log("%");
                break;

            case 6:
                console.log("^");
                break;
                
            case 7:
                console.log("&");
                break;

            case 8:
                console.log("*");
                break;

            case 9:
                console.log("(");
                break;
            
            default: 
                console.log("wrong input")
                                                    
        }
        break;

    case 3:
        //задание 3
        let thirdTaskValue = Number(prompt("Enter your value:"));
        let firstNumber = thirdTaskValue % 10;
        let secondNumber = Math.floor(thirdTaskValue / 10) % 10;
        let thirdNumber = Math.floor(thirdTaskValue / 100) % 10;

        console.log(`Единицы: ${firstNumber}\nДесятки: ${secondNumber}\nСотни: ${thirdNumber}`)

        if(firstNumber === secondNumber === thirdNumber) {
            console.log("Все числа одинаковые");
        }
        else {
            if (firstNumber === secondNumber) {
                console.log("Перове и второе число одинаковые");
            } else if (firstNumber === secondNumber) {
                console.log("Перове и третье число одинаковые");
            } else if (firstNumber === secondNumber) {
                console.log("второе и второе число одинаковые");
            }
        }
        break;

    case 4:
        let fourthTaskValue = Number(prompt("Enter your value:"));
        if (fourthTaskValue % 4 === 0 && fourthTaskValue % 100 !== 0 || fourthTaskValue % 400 === 0) 
        {
            console.log("Это высокосный год")
        }
        else {
            console.log("Это обычный год")
        }
        break;

    case 5:
        let fifthTaskValue = Number(prompt("Enter your value:"));
        let firstValueChar = Math.floor(fifthTaskValue / 10000) % 10;
        let secondValueChar = Math.floor(fifthTaskValue / 1000) % 10;
        let thirdValueChar = Math.floor(fifthTaskValue / 100) % 10;
        let fourthValueChar = Math.floor(fifthTaskValue / 10) % 10;
        let fifthValueChar = fifthTaskValue  % 10;
        
        if (firstValueChar === fifthValueChar && secondValueChar === fourthValueChar) {
            console.log("Ваше значение полиндром");
        }
        else {
            console.log("Ваше значение не полиндром");
        }
        break;

    case 6:
        const euroCourse = 0.83
        const uanCourse = 28.08
        const aznCourse = 1.7
        let usdNumber = Number(prompt("Enter your USD amount:"));
        let currency = prompt("Enter new currency:");
        switch (currency) {
            case "EUR":
                console.log(`${usdNumber} USD = ${usdNumber * euroCourse} EUR`);
                break;

            case "UAN":
                console.log(`${usdNumber} USD = ${usdNumber * uanCourse} UAN`);
                break;

            case "AZN":
                console.log(`${usdNumber} USD = ${usdNumber * aznCourse} AZN`);
                break;
            
            default:
                console.log("wrong input")
        }
        break;

    case 7:
        let seventhTaskValue = Number(prompt("Enter your value:"));
        if(seventhTaskValue >= 200 && seventhTaskValue < 300) {
            seventhTaskValue -= seventhTaskValue / 100 * 3;
        } else if (seventhTaskValue >= 300 && seventhTaskValue < 500) {
            seventhTaskValue -= seventhTaskValue / 100 * 5;
        } else if (seventhTaskValue >= 500) {
            seventhTaskValue -= seventhTaskValue / 100 * 7;
        }

        console.log(`Сумма к оплате: ${seventhTaskValue}`);
        break;
        
    case 8:
        let circleLen =  Number(prompt("Enter circle length:"));
        let perimetr =  Number(prompt("Enter perimetr length:"));

        let radius = circleLen / (2 * Math.PI);
        console.log(`diametr = ${2 * radius}`);
        console.log(`square side length = ${perimetr / 4}`);
        if (2 * radius <= perimetr / 4) {
            console.log("your circle can fit into a square")
        } else {
            console.log("your circle can't fit into a square")
        }
        break;
    
    case 9:
        let score = 0;
        let firstChoice = Number(prompt("Question _ 1! Enter yours answer:"));
        switch(firstChoice) {
            case 1:
                console.log("right answer!");
                score += 2;

            break;

            case 2:
                console.log("wrong answer");
            break;

            case 3:
                console.log("wrong answer");
            break;
            
            default:
                console.log("wrong input");
        }

        let secondChoice = Number(prompt("Question _ 2! Enter yours answer:"));
        switch(secondChoice) {
            case 1:
                console.log("wrong answer");
            break;

            case 2:
                console.log("right answer!");
                score += 2;
            break;

            case 3:
                console.log("wrong answer");
            break;
            
            default:
                console.log("wrong input");
        }

        let thirdChoice = Number(prompt("Question _ 3! Enter yours answer:"));
        switch(thirdChoice) {
            case 1:
                console.log("wrong answer");
            break;

            case 2:
                console.log("wrong answer");
            break;

            case 3:
                console.log("right answer!");
                score += 2;
            break;
            
            default:
                console.log("wrong input");
        }


        console.log(`your score is ${score}`)
        break;

    case 10:
        //Задание 10

        let year = Number(prompt("Enter year:"));
        while(true)
        {
            if (year < 0)
            {
                year = Number(prompt("Enter new year value:"));
            } else {
                break;
            }
        }

        let month = Number(prompt("Enter month:"));

        while(true)
        {
            if (month < 0 && month > 12)
            {
                year = Number(prompt("Enter new year value:"));
            } else {
                break;
            }
        }

        let day = Number(prompt("Enter day:"));

        while(true)
        {
            if (day < 0 || day > 30)
            {
                if (day === 31 || day === 30)
                {
                    break;
                }

                year = Number(prompt("Enter new year value:"));
            } else {
                break;
            }
        }

            console.log("высокосный");

            if (month === 2)
            {
                if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                    if(day === 29)
                    {
                        day = 1;
                        month++;
                    } else {
                        day++;
                    }
                } else {
                    
                    if(day === 28)
                    {
                        day = 1;
                        month++;
                    } else {
                        day++;
                    }
                }

            } else {

                switch(month) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:

                        if(day === 31 && month === 12)
                        {
                            day = 1;
                            month = 1;
                            year++;
                        } else if (day === 31) {
                            day = 1;
                            month ++;
                        } else {
                            day++;
                        }
                        break;
                    
                    case 2:
                    case 4:
                    case 6:
                    case 9:
                    case 11:

                        if(day === 30 && month === 12) {
                            day = 1;
                            month = 1;
                            year++;
                        } else if (day === 30) {
                            day = 1;
                            month++;
                        }
                        break;
                    
                    default: 
                        console.log("wrong input");
                }
            }

        console.log(`${day}.${month}.${year}`);

        break;

    default: 
        console.log("wrong input")
}

