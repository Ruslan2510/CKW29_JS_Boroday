/*3.2. Выведите столбец четных чисел в промежутке от 0 до 100. Выполните задание используя все виды циклов.*/

console.log("Цикл \"for\"\n")
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("\n\nЦикл \"while\"\n")
let i = 0;
while (i < 100) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

console.log("\n\nЦикл \"do...while\"\n")
i = 0;
do {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
} while (i < 100);