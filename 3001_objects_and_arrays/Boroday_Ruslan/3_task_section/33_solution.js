/*3.3. С помощью цикла найдите сумму чисел от 1 до 100. Выполните задание используя все виды циклов.*/

let sum = 0;

console.log("Цикл \"for\"\n")
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

console.log("\n\nЦикл \"while\"\n")
sum = 0;
let i = 0;
while (i < 100) {
    i++;
    sum += i;
}
console.log(sum);

console.log("\n\nЦикл \"do...while\"\n")
sum = 0;
i = 0;
do {
    i++;
    sum += i;
} while (i < 100);
console.log(sum);