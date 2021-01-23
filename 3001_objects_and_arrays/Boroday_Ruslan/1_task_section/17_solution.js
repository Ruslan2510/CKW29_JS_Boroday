/*1.7. Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение)
цифр этого числа.*/

let num = "12345";
let res = 1;

for (let i = 0; i < num.length; i++) {
    res *= Number(num[i]);
}

console.log(res)