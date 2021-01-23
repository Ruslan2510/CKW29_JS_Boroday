/*2.8. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года
попадает этот месяц (зима, лето, весна, осень).*/

let month = Number(prompt("Enter value from 1 to 12"));

if (month <= 0 || month > 12) {
    console.log("Incorrect input!");
} else if (month <= 2 || month === 12) {
    console.log("Зима");
} else if (month > 2 && month <= 5) {
    console.log("Весна");
} else if (month > 5 && month <= 8) {
    console.log("Лето");
} else {
    console.log("Осень");
}