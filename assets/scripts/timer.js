'use strict';

let counter = 10;

const timerItem = document.createElement('div');
timerItem.textContent = `${counter} seconds`;
document.body.appendChild(timerItem);

const interval = setInterval(timerCounter, 1000);

function timerCounter() {
    counter--;
    timerItem.textContent = `${counter} seconds`;

    if (counter === 0){
        counter = 10;
    }
}