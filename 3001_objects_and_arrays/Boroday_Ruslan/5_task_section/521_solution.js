/*5.21 Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите
true, а если нет - выведите false. Оформите код в виде функции.*/

 let array = [1, 2, 2, 4, 5, 6, 7, 88, 8, 9, 10 ];

 let flag = false;
 for (let i = 1; i < array.length; i++) {
    if (array[i - 1] === array[i]) {
        flag = true;
    }
 }

 console.log(flag);