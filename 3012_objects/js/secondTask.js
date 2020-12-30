//30.12.20 Objects HW


//Задание 2
let fraction = {
    numerator: 0,
    denominator: 0,

    //Сокращение дробей
    cutBack() {
        let i = 0;
        if (this.numerator > this.denominator) {
            i = Math.abs(this.denominator);
        }
        else {
            i = Math.abs(this.numerator);
        }
        while (i > 1) {
            if (this.numerator % i === 0 && this.denominator % i === 0) {
                this.numerator /= i;
                this.denominator /= i;
            }
            i--;
        }
        return `Новая дробь ${this.numerator}/${this.denominator}`;
    },

    //Сложение
    add(firstFraction, secondFraction) {
        if (firstFraction.denominator !== secondFraction.denominator) {
            //Числители
            firstFraction.numerator *= secondFraction.denominator; 
            secondFraction.numerator *= firstFraction.denominator;
            //Знаменатель
            firstFraction.denominator *= secondFraction.denominator;
            secondFraction.denominator = firstFraction.denominator;
        }

        this.numerator = firstFraction.numerator + secondFraction.numerator;
        this.denominator = firstFraction.denominator;
        this.cutBack();
    },

    //Вычитание
    sub(firstFraction, secondFraction) {
        if (firstFraction.denominator !== secondFraction.denominator) {
            //Числители
            firstFraction.numerator *= secondFraction.denominator; 
            secondFraction.numerator *= firstFraction.denominator;
            //Знаменатель
            firstFraction.denominator *= secondFraction.denominator;
            secondFraction.denominator = firstFraction.denominator;
        }

        this.numerator = firstFraction.numerator - secondFraction.numerator;
        this.denominator = firstFraction.denominator;
        this.cutBack();
    },

    //Умножение
    mul(firstFraction, secondFraction) {
        this.numerator = firstFraction.numerator * secondFraction.numerator;
        this.denominator = firstFraction.denominator * secondFraction.denominator;
        this.cutBack();
    },

    //Деление
    div(firstFraction, secondFraction) {
        this.numerator = firstFraction.numerator * secondFraction.denominator;
        this.denominator = firstFraction.denominator * secondFraction.numerator;
        this.cutBack();
    }
}





//Копирование объектов
function copy(obj) {
    let copy = {};
    for (let prop in obj) {
        copy[prop] = fraction[prop];
    }
    return copy;
}


fraction.numerator = Number(prompt("Enter numerator"));
fraction.denominator = Number(prompt("Enter denominator"));

//let secondValue = {...fraction};
let firstValue = copy(fraction);


fraction.numerator = Number(prompt("Enter numerator"));
fraction.denominator = Number(prompt("Enter denominator"));

//let secondValue = {...fraction};
let secondValue = copy(fraction);

fraction.numerator = 0;
fraction.denominator = 0;

let result = fraction;
//result.add(firstValue, secondValue);
//result.sub(firstValue, secondValue);
result.mul(firstValue, secondValue);
result.div(firstValue, secondValue);

console.log(result.numerator + "/" + result.denominator);