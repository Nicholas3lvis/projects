'use strict';
// let min = 0
// let max = 100
// console.log(Math.floor(Math.random()*(max + 1)));

// const btn = document.getElementById('btn').value

function random() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('randomNumber').innerText = randomNumber;
}