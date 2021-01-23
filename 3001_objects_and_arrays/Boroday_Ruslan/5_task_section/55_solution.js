/*5.5. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из
массива, которые начинаются на цифру 1, 2 или 5.*/

let arr = [10, 20, 30, 50, 235, 3000, 44, 21];

let firstDigit;
let tmp;
for (let i = 0; i < arr.length; i++) {
    firstDigit = 0;
    tmp = arr[i];
    while (tmp > 0) {
        firstDigit = tmp % 10;
        tmp = Math.floor(tmp / 10);
    }
    if (firstDigit === 1 || firstDigit === 2 || firstDigit === 5) {
        console.log(arr[i]);
    }
}