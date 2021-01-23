/*Создать массив «Список покупок». Каждый элемент массива
является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
1. Вывод всего списка на экран таким образом, чтобы сначала
шли некупленные продукты, а потом – купленные.
2. Добавление покупки в список. Учтите, что при добавлении
покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
а не добавлять новую.
3. Покупка продукта. Функция принимает название продукта
и отмечает его как купленный.*/

let shoppingList = [
    { name: "apple", amount: 3, isBougth: false},
    { name: "orange", amount: 5, isBougth: true},
    { name: "water", amount: 1, isBougth: true},
    { name: "bread", amount: 2, isBougth: false},
    { name: "butter", amount: 1, isBougth: true},
];

//1)
function showEntireList(array) {
    let value = 0;
    console.log(" Product\t\tAmount\t\tIs bougth");  
    for (let i = 0; i < array.length; i++) {
        if (array[i].isBougth === false) {
            console.log(`${++value}: ${array[i].name} \t-\t ${array[i].amount}\t\t\t${array[i].isBougth}`);
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i].isBougth === true) {
            console.log(`${++value}: ${array[i].name} \t-\t ${array[i].amount}\t\t\t${array[i].isBougth}`);
        }
    }
};

showEntireList(shoppingList);

//2)
function addNewProduct(array, newProduct) {
    isPresent = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === newProduct.name) {
            isPresent = true;
            if (array[i].isBougth === false && newProduct.isBougth === true) {
                if (array[i].amount > newProduct.amount) {
                    array[i].amount -= newProduct.amount;
                } else {
                    array[i].amount = newProduct.amount;
                    array[i].isBougth = true;
                }
            } else if (array[i].isBougth === true && newProduct.isBougth === false) {
                if (array[i].amount < newProduct.amount) {
                    array[i].amount = newProduct.amount - array[i].amount;
                    array[i].isBougth = false;
                }
            } else {
                array[i].amount += newProduct.amount;
            }
        }
    }
    if (!isPresent) {
        array[array.length] = newProduct;
    }
}

addNewProduct(shoppingList, {name: "orange", amount: 4, isBougth: true});

//3)
function buyProduct(array, productName) {

    if (typeof productName !== "string") {
        throw "Incrorect parameter (product name)!";
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i].name === productName) {
            if (array[i].isBougth === false) {
                array[i].isBougth = true;
            } else {
                console.log("\nПродукт " + productName + " уже куплен!\n");
            }
        }
    }
}

buyProduct(shoppingList, "orange");
showEntireList(shoppingList);