/*3.1. Выведите столбец чисел от 1 до 50. Выполните задание используя все виды циклов.*/
console.log("Цикл \"for\"\n")
for (let i = 1; i <= 50; i++) {
    console.log(i);
}

console.log("\n\nЦикл \"while\"\n")
let i = 1;
while (i <= 50) {
    console.log(i);
    i++;
}


console.log("\n\nЦикл \"do...while\"\n")
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 50);