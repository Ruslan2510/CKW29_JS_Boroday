/*5.16. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.*/

let array = [1, 2, 3, 4, 5, 6, 7];

console.log(array.length / 2);

for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[array.length - i - 1];
    array[array.length - i - 1] = array[i];
    array[i] = temp;
}

console.log(array);