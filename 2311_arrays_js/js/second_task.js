/*Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за
единицу товара. Написать следующие функции.
1. Распечатка чека на экран.
2. Подсчет общей суммы покупки.
3. Получение самой дорогой покупки в чеке.
4. Подсчет средней стоимости одного товара в чеке.
*/

let priceCheck = [
    {name: "bread", amount: 2, price: 20},
    {name: "pomelo", amount: 3, price: 40},
    {name: "soap", amount: 2, price: 10},
    {name: "cheese", amount: 1, price: 60},
    {name: "water", amount: 2, price: 20}
];


//1)
function showAllPriceCheck(list) {
    console.log("\t\t\tPrice check");
    console.log(" Product\t\tAmount\t\tPrice");

    for (let i = 0; i < list.length; i++) {
        console.log(`${i + 1}: ${list[i].name} \t-\t ${list[i].amount}\t\t\t${list[i].price} UAH`);
    }
    console.log(getPurchaseCost(list));
}

showAllPriceCheck(priceCheck);

//2)

function getPurchaseCost(list) {
    let sum = 0;

    for (let i = 0; i < list.length; i++) {
        sum += list[i].amount * list[i].price;
    }
    return `\nTotal price is ${sum} UAH`;
}

console.log(getPurchaseCost(priceCheck));

//3)
function getMostExpensive(list) {
    let maxCost = list[0].price * list[0].amount;
    let productNumber = 0;

    for (let i = 1; i < list.length; i++) {
        if (maxCost < list[i].price * list[i].amount) {
            maxCost = list[i].price * list[i].amount;
            productNumber = i;
        }
    }
    return `\n${list[productNumber].name} is most expensive, it cost ${maxCost} for ${list[productNumber].amount} pieces`;
}

console.log(getMostExpensive(priceCheck));

//4)

function getAverageCost(list) {
    let sum = 0;
    let number = 0;

    for (let i = 0; i < list.length; i++) {
        sum += list[i].price;
        number += list[i].amount;
    }

    return `\nAverage cost is ${sum / number} UAH`;
}

console.log(getAverageCost(priceCheck));