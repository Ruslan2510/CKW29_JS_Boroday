const myCards = document.getElementById('container');

const images = [
    '1', '2', '3', '4', '5', '6', '7', '8',  '9', '10', '11', '12', '13', '14', '15', '16', '17', '18',
    '19', '20', '21', '22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38',
    '39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58',
    '59', '60', '61', '62', '63','64','65','66','67','68','69','70','71','72'
];

const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const buttonPause = document.getElementById('button-pause');
const text = document.getElementById('text');

//initial field size
let fieldSize = 6;

const sixCellField = document.getElementById("sixth-btn");
const eightCellField = document.getElementById("eighth-btn");
const tenCellField = document.getElementById("tenth-btn");
const twelveCellField = document.getElementById("twelfth-btn");


const changeField = function(number, string) {
    fieldSize = number;
    myCards.className = string;
    start();
}


sixCellField.addEventListener("click", () => changeField(6, "six"));
eightCellField.addEventListener("click", () => changeField(8, "eight"));
tenCellField.addEventListener("click", () => changeField(10, "ten"));
twelveCellField.addEventListener("click", () => changeField(12, "twelve"));


start();

function start() {
    let resultsArray = [];
    let counter = 0;
    let seconds = 0;
    let tens = 0;
    let tries = 0;
    text.innerHTML = "";

    let Interval;

    array = images.slice(0, fieldSize * fieldSize / 2);
    clone = array.slice(0); //duplicates array
    cards = clone.concat(array); // merge to arrays


    // Shufffel function
    function shuffle(o){
    for(let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i],   o[i] = o[j], o[j] = x);
    return o;
    }
    shuffle(cards);

    //Clear field
    while (myCards.firstChild) {
        myCards.removeChild(myCards.firstChild);
    }

    let score = function () {

        if(counter === fieldSize * fieldSize / 2) {
            clearInterval(Interval);
            text.innerHTML = "Счет: " + (5000 - (seconds + tries));
        }
    }


    for (let i = 0; i < cards.length; i++) {
        card = document.createElement('div');
        card.dataset.item = cards[i];
        card.dataset.view = "card";
        myCards.appendChild(card);

        card.onclick = function () {
            if (this.className !== 'flipped' && this.className !== 'correct'){
                this.className = 'flipped';
                let result = this.dataset.item;
                resultsArray.push(result);
                clearInterval(Interval);
                Interval = setInterval(startTimer, 10);
            }

            if (resultsArray.length > 1) {
                if (resultsArray[0] === resultsArray[1]) {
                    check("correct");
                    counter ++;
                    score();
                    resultsArray = [];
                } else {
                    check("reverse");
                    resultsArray = [];
                }
            }
        }
    }


    window.onload = function () {
        span = document.getElementById('triesid');
        let tries = 0;
        span.innerHTML = tries;
        document.body.onclick = function (e) {
            let target = e.target;
            if (target.className !== 'flipped') return;
            tries++;
            span.innerHTML = Math.floor(tries / 2);
        }
    }


    let check = function(className) {
        let x = document.getElementsByClassName("flipped");

        setTimeout(function() {

            for(let i = (x.length - 1); i >= 0; i--) {
                x[i].className = className;
            }

        }, 500);
    }


    buttonPause.onclick = function() {
        clearInterval(Interval);
    }


    function startTimer () {
        tens++;

        if(tens < 9){
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9){
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }

    //if you press the buttons "shift + w", the game will end
    window.onkeydown = function(event) {
        if (event.keyCode === 87 && event.shiftKey) {
            event.preventDefault();
            counter = fieldSize * fieldSize / 2;
            score();
            for (let i = 0; i < myCards.children.length; i++) {
                console.log(myCards.children[i]);
                myCards.children[i].setAttribute("class", "flipped");
            }
        }
    }
}