//Массив картинок
const pictureArray = ["1.jpg", '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

let counter = 0;

//Сосдаем тег Img
const newImg = document.createElement("img");
newImg.setAttribute("src","img/"+ pictureArray[counter]);

const wrapper = document.body.querySelector(".wrapper");
const pictureBox = wrapper.firstElementChild;
pictureBox.appendChild(newImg);

//Достаем кнопки
const previousButton = wrapper.lastElementChild.firstElementChild;
const nextButton = wrapper.lastElementChild.lastElementChild;

previousButton.addEventListener("click", function() {
        if (counter !== 0) {

                newImg.setAttribute("src", "img/"+ pictureArray[--counter]);
        }
});

nextButton.addEventListener("click", function() {
        if (counter !== pictureArray.length - 1) {
                newImg.setAttribute("src", "img/"+ pictureArray[++counter]);
        }
});