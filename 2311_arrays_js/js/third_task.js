/*Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
Написать функцию, которая принимает массив стилей и
текст, и выводит этот текст с помощью document.write() в тегах
<p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве. 
*/

let styles = [
    {name: "first-style", 
        style: {color: "#f00", fontFamily: "Arial", fontWeight: "bold", textAlign: "center", textDecoration: "underline"}},
    {name: "first-style", 
        style: {color: "#0f0", fontFamily: "Cambria", fontWeight: "800", textAlign: "left", textDecoration: "overline"}},
    {name: "first-style", 
        style: {color: "#00f", fontFamily: "Verdana", fontWeight: "normal", textAlign: "justify", textDecoration: "line-through"}}
];

function transformText(array, text) {
    for (let i = 0; i < array.length; i++) {
        document.write(`<p style="color: ${array[i].style.color}; font-family: ${array[i].style.fontFamily}; font-weight: ${array[i].style.fontWeight}; text-align: ${array[i].style.textAlign}; text-decoration: ${array[i].style.textDecoration}">${text}</p>`);
    }
}

transformText(styles, "My text");