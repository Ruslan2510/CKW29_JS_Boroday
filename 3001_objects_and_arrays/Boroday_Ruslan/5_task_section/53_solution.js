/*3. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран
столбец тех элементов массива, которые больше 3-х, но меньше 10.*/

let arr = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        console.log(arr[i]);
    }
}