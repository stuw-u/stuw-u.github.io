var colorDisplayTop = document.getElementById("color-display-top-id");
var colorDisplayBottom = document.getElementById("color-display-bottom-id");
var resultColorText = document.getElementById("result-color-rgb");
var topColorText = document.querySelectorAll(".top");
var bottomColorText = document.querySelectorAll(".bottom");
var guessText = document.getElementById("guess-id");
var rInput = document.getElementById("r-input");
var gInput = document.getElementById("g-input");
var bInput = document.getElementById("b-input");
var scoreText = document.getElementById("score");


var seed = 0;
var randomGenerator;

var answerRGB = [0,0,0];
var answerLab = [0,0,0];
var guessRGB = [0,0,0];

var isGuessing = true;



function startNoSeed () {
    seed = Math.floor(Math.random() * 10000000);
    start();
}

function startWithSeed () {
    seed = parseInt(document.getElementById("seed-input").value);
    start();
}

function start () {
    getNextRandomColor();
    document.getElementById("button-row-id").style.display = "none";
    document.getElementById("color-row-id").style.display = "";
    document.getElementById("color-wrap-id").style.display = "";
    document.getElementById("guess-id").style.display = "";
}

function getNextRandomColor () {
    randomGenerator = mulberry32(seed);
    seed++;


    var hexColor = colorDatabase[Math.floor(randomGenerator() * colorDatabase.length)];
    console.log(hexColor.name);
    answerRGB = hexColor.hex.match(/\w\w/g).map(hex => parseInt(hex, 16));
    /*var answerHue = randomGenerator();
    var answerValue = randomGenerator();
    answerValue = Math.pow(answerValue, 1/2.2);
    var answerSat = randomGenerator();
    var answerHSV = [answerHue * 360, answerSat * 100, answerValue * 100];
    answerRGB = hsv.rgb(answerHSV);*/
    answerRGB = [Math.round(answerRGB[0]), Math.round(answerRGB[1]), Math.round(answerRGB[2])]
    var answerHSV = rgb.hsv(answerRGB);
    answerLab = xyz.lab(rgb.xyz(answerRGB))

    colorDisplayTop.style.backgroundColor = rgbArrayToCss(answerRGB);
    resultColorText.textContent = `(${answerRGB[0]},${answerRGB[1]},${answerRGB[2]})`;

    var textColor = (answerHSV[2] > 0.4) ? "Black" : "White";
    for (var i = 0; i < topColorText.length; i++) {
        topColorText[i].style.color = textColor;
    }

    toggleGuessMode(true);
}

function toggleGuessMode (enabled) {
    colorDisplayBottom.style.display = (enabled ? "none" : "block");
    colorDisplayTop.style.borderRadius = (enabled ? "30px" : "");
    resultColorText.style.display = (enabled ? "none" : "block");
    scoreText.style.display = (enabled ? "none" : "block");
}

function guess () {
    if(isGuessing) {
        var rValue = rInput.value;
        var gValue = gInput.value;
        var bValue = bInput.value;
        if(isNaN(rValue) && rValue == "") {
            rValue = 0;
            rInput.value = rValue;
        }
        if(isNaN(gValue) && gValue == "") {
            gValue = 0;
            gValue.value = gValue;
        }
        if(isNaN(bValue) && bValue == "") {
            bValue = 0;
            bValue.value = bValue;
        }
        guessRGB = [rValue, gValue, bValue]; 
        var guessLAB = xyz.lab(rgb.xyz(guessRGB));
        var guessHSV = rgb.hsv(guessRGB);
    
        var textColor = (guessHSV[2] > 0.4) ? "Black" : "White";
        for (var i = 0; i < bottomColorText.length; i++) {
            bottomColorText[i].style.color = textColor;
        }
    
        toggleGuessMode(false);
    
        colorDisplayBottom.style.backgroundColor = rgbArrayToCss(guessRGB);
        
        var score = 100-deltaE2000(answerLab, guessLAB);
        score = Math.round(score);

        scoreText.textContent = `Accuracy: ${score}%`;

        isGuessing = false;
        guessText.textContent = "Next guess...";
    }
    else {
        guessText.textContent = "Make a guess!";
        isGuessing = true;
        getNextRandomColor();
    }
}

var rField = document.getElementById("r-input");
rField.addEventListener("input", function() {
    var inputValue = Math.floor(parseInt(rField.value));
    if (inputValue < 0) {
        inputValue = 0;
    }
    else if (inputValue > 255) {
        inputValue = 255;
    }
    rField.value = inputValue;
});
var gField = document.getElementById("g-input");
gField.addEventListener("input", function() {
    var inputValue = Math.floor(parseInt(gField.value));
    if (inputValue < 0) {
        inputValue = 0;
    }
    else if (inputValue > 255) {
        inputValue = 255;
    }
    gField.value = inputValue;
});
var bField = document.getElementById("b-input");
bField.addEventListener("input", function() {
    var inputValue = Math.floor(parseInt(bField.value));
    if (inputValue < 0) {
        inputValue = 0;
    }
    else if (inputValue > 255) {
        inputValue = 255;
    }
    bField.value = inputValue;
});