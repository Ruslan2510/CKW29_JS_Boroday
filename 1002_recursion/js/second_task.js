/*2. Написать функцию поиска наибольшего общего делителя.*/
let first_value = Number(prompt("Enter your value"));
let second_value = Number(prompt("Enter degree"));

function nod(first, second)
{
        if (second === 0)
                return first;
        return nod(second, first % second);
}

console.log(nod(first_value, second_value));