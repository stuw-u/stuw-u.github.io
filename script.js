var seed = 0;
var randomGenerator;
var colorHue = 0;
var colorLight = 0;
var colorSat = 0;
var rFinal = 0;
var gFinal = 0;
var bFinal = 0;
var isGuessing = true;

function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

function lightnessbias (x) {
    const a = 1.58740105197;
    return Math.pow((a * (x - 0.5)),3)+0.5;
}

function scorebias (x) {
    if(x < 0.7928) {
        return Math.pow(x,5);
    }
    else {
        return 1-Math.pow(4*(x-1),2);
    }
}

function hslToRgb(h, s, l) {
    // Ensure h is between 0 and 360, s and l are between 0 and 1
    h = (h % 360 + 360) % 360;
    s = Math.min(1, Math.max(0, s));
    l = Math.min(1, Math.max(0, l));

    // Convert HSL to RGB
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;
    let r, g, b;

    if (h >= 0 && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (h >= 60 && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (h >= 120 && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (h >= 180 && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (h >= 240 && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else {
        r = c;
        g = 0;
        b = x;
    }

    // Adjust for m
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return [r, g, b];
}

function rgbToHsl(r, g, b) {
    // Normalize RGB values to the range [0, 1]
    r /= 255;
    g /= 255;
    b /= 255;

    // Find the minimum and maximum values among R, G, and B
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);

    // Calculate the lightness (L)
    var l = (max + min) / 2;

    var h, s;

    if (max === min) {
        // Achromatic (gray) color, no hue
        h = s = 0;
    } else {
        var d = max - min;
        // Calculate the saturation (S)
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        // Calculate the hue (H)
        if (max === r) {
            h = (g - b) / d + (g < b ? 6 : 0);
        } else if (max === g) {
            h = (b - r) / d + 2;
        } else {
            h = (r - g) / d + 4;
        }

        h /= 6;
    }

    // Convert HSL values to degrees and percentages
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { h, s, l };
}

function hslSimilarity(hsl1, hsl2) {
    // Normalize HSL values to the same scale (0-360 for H, 0-100 for S and L)
    var h1 = hsl1.h / 360;
    var s1 = hsl1.s / 100;
    var l1 = Math.pow(hsl1.l / 100, 1.5);

    var h2 = hsl2.h / 360;
    var s2 = hsl2.s / 100;
    var l2 = Math.pow(hsl2.l / 100, 1.5);

    // Calculate the Euclidean distance between the two HSL colors
    var dh = Math.abs(h1 - h2);
    var ds = Math.abs(s1 - s2);
    var dl = Math.abs(l1 - l2);

    // Ensure the shortest path for hue (0-360 degrees)
    if (dh > 0.5) {
        dh = 1 - dh;
    }

    dh = Math.pow(dh, 0.7);
    ds = Math.pow(ds, 0.7);
    dl = Math.pow(dl, 0.85);

    // Weight the components to account for the perceptual importance of each
    var weightH = 6;   // Adjust as needed
    var weightS = 2;   // Adjust as needed
    var weightL = 3;   // Adjust as needed

    console.log(dh * weightH);
    console.log(ds * weightS);
    console.log(dl * weightL);

    // Calculate the similarity score (0-1)
    var score = 1 - (weightH * dh + weightS * ds + weightL * dl) / (weightH + weightS + weightL);

    score = Math.pow(score,2);

    return score;
}




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

    colorHue = randomGenerator();
    colorLight = lightnessbias(randomGenerator());
    colorSat = randomGenerator();
    colorSat = colorSat;

    document.getElementById("color-display-top-id").style.backgroundColor = 
    "hsl(" + Math.floor(colorHue * 360) + ", " + Math.floor(colorSat * 100) + "%, " + Math.floor(colorLight * 100) +  "%)";


    var rgbFinal = hslToRgb(colorHue * 360, colorSat, colorLight);
    document.getElementById("result-color-rgb").textContent = `(${rgbFinal[0]},${rgbFinal[1]},${rgbFinal[2]})`;

    var textColor; 
    if(colorLight < 0.3) {
        textColor = "White";
    }
    else {
        textColor = "Black";
    }
    var elements = document.querySelectorAll(".top");
    // Loop through the selected elements and change their CSS color property
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = textColor; // Change the color to your desired value
    }

    toggleGuessMode(true);

    
}

function toggleGuessMode (enabled) {
    document.getElementById("color-display-bottom-id").style.display = (enabled ? "none" : "block");
    document.getElementById("color-display-top-id").style.borderRadius = (enabled ? "30px" : "");
    document.getElementById("result-color-rgb").style.display = (enabled ? "none" : "block");
    document.getElementById("score").style.display = (enabled ? "none" : "block");
}

function guess () {
    if(isGuessing) {
        var rValue = document.getElementById("r-input").value;
        var gValue = document.getElementById("g-input").value;
        var bValue = document.getElementById("b-input").value;
        if(isNaN(rValue) && rValue == "") {
            rValue = 0;
            document.getElementById("r-input").value = rValue;
        }
        if(isNaN(gValue) && gValue == "") {
            gValue = 0;
            document.getElementById("g-input").value = gValue;
        }
        if(isNaN(bValue) && bValue == "") {
            bValue = 0;
            document.getElementById("b-input").value = bValue;
        }
    
        var guessHSL = rgbToHsl(rValue, gValue, bValue);
    
        var textColor; 
        if(guessHSL.l < 30) {
            textColor = "White";
        }
        else {
            textColor = "Black";
        }
        var elements = document.querySelectorAll(".bottom");
        // Loop through the selected elements and change their CSS color property
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = textColor; // Change the color to your desired value
        }
    
        toggleGuessMode(false);
    
        document.getElementById("color-display-bottom-id").style.backgroundColor =
        `rgb(${rValue},${gValue},${bValue})`;
        
        var correctHSL = {h: colorHue * 360, s: colorSat * 100, l: colorLight* 100};
        var score = Math.round(hslSimilarity(guessHSL, correctHSL) * 100);
        document.getElementById("score").textContent = `Accuracy: ${score}%`;

        isGuessing = false;
        document.getElementById("guess-id").textContent = "Next guess...";
    }
    else {
        document.getElementById("guess-id").textContent = "Make a guess!";
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