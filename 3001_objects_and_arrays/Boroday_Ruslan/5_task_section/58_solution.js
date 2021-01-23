/*5.8. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с
элементами 12, 15, 20, 25, 59, 79.*/

let arr = [12, 15, 20, 25, 59, 79];
let average = 0;

for (let i = 0; i < arr.length; i++) {
    average += arr[i];    
}

average /= arr.length;
console.log(average);