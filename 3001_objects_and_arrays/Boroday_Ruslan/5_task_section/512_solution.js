/*5.12. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его по убыванию.*/

let arr = [3, 4, 1, 2, 7];

console.log(arr.sort(function(a, b) {
    return b - a;
}));