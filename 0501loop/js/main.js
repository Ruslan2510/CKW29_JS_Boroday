// //1)
// function InvDigits(number) {
//     if(String(number).length < 5 || typeof number !== "number" || isNaN(number)) {
//         throw "Incorrect input";
//     }
//     let newValue = 0;
//     while(number) {
//         newValue = newValue * 10 + number % 10;
//         number = Math.floor(number / 10);
//     }
//     return newValue;
// }

// console.log(InvDigits(12345))


// //2)
// function AddRightDigit(digit, number) {
//     return Number(String(number) + String(digit));
// }

// console.log(AddRightDigit(3, 12))



// //3)
// function AddLeftDigit(digit, number) {
//     return Number(String(digit) + String(number));
// }

// console.log(AddLeftDigit(3, 21));



// //4)

// function IsEven(number) {
//     if (typeof number !== "number") {
//         throw "number is incorrect";
//     }
//     if (number % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// console.log(IsEven(4));

// //5)
// function IsSquare(number) {
//     if (typeof number !== "number" || number < 1) {
//         throw "number is incorrect";
//     }
//     if (number < 1)
//     {
//         throw "Incorrect input";
//     }
//     let i = number;
//     while(i > 1) {
//         if (number / i === i) {
//             return true;
//         }
//         i--;
//     }
//     return false;
// }

// console.log(IsSquare(121));



// //6)
// function IsPrime(number) {

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

// console.log(IsPrime(9));



// //7)
// function IsPower(extent, number) {

//     if (typeof extent !== "number" || extent <= 0) {
//         throw "extent is incorrect";
//     }

//     if (typeof number !== "number" || number <= 1) {
//         throw "number is incorrect";
//     }
//     while(extent > 1) {
//         extent /= number;
//         if (extent < 1)
//         {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(IsPower(121, 11));



function printNumbers(modify) {
    for (let i = 0; i < 10; i++) {
        console.log(modify(i + 1));
    }
}

printNumbers(function(value) {
    return value * value;
});