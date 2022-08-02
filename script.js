var hitelem = document.querySelector('#hitelem');
var scoreelem = document.querySelector("#scoreelem")
var timerelem = document.querySelector("#timerelem")
var bpnl = document.querySelector("#bpnl");
var randomNumber;
var guessNumber;
var clickedBubbleValue;
var score = 0;
var timer = 60;

setInterval(function() {
    if (timer > 0) {
        --timer;
        timerelem.textContent = timer;
    } else {
        bpnl.innerHTML = `<h1 id="center">Game Over <br> Your score is ${score} </h1>`
    }
}, 1000)

function hitRandomNumber() {
    guessNumber = Math.floor(Math.random() * 10);
    hitelem.textContent = guessNumber;
}

function makeBubble() {
    for (var i = 0; i < 125; i++) {
        randomNumber = Math.floor(Math.random() * 10);
        var template = `<div class="bubble">${randomNumber}</div>`;
        bpnl.innerHTML += template;
    }
}

bpnl.addEventListener('click', function(details) {
    var clickedBubbleValue = details.target.textContent;
    // console.log(clickedBubbleValue);
    if (clickedBubbleValue == guessNumber) {
        score = score + 10;
        // console.log(clickedBubbleValue);
        scoreelem.textContent = score;
        hitRandomNumber();
        bpnl.innerHTML = "";
        makeBubble();
    }
})


hitRandomNumber();
makeBubble();