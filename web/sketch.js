//p5.js setup

let values = [];
let loops = 0;
let swaps = 0;
let cycles = 1;
let lines = false;
let numLines = 200;
let finished = false;
let button;
let selType, inpNum;


function setup(){

    selType = createSelect();
    selType.position(10,10);
    selType.option('MergeSort');

    inpNum = createInput('200');
    inpNum.position(10, 30);
    inpNum.input(function() {
        numLines = inpNum.value();
        resetArray();
    });

    button = createButton('Restart');
    button.position(10,50);
    button.mousePressed(resetArray);
    

    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, height);
    resetArray();
}

function draw(){
    background(0);

    for(i = 0; i < values.length; i++){
        let col = color(values[i], height, height);
        let location = map(i, 0, values.length, 0, width);
        colorMode(RGB);
        switch(i) {
            default:
                stroke(col);
                fill(col);
        }
        colorMode(HSB, height);
        rect(location, height-values[i], width/numLines, height);
    }
}

resetArray = function(){
    console.log('resetting')
    values = [];
    for(i = 0; i < numLines; i++){
        values[i] = random(height);
    }
    loops= 0;
    swaps = 0;
    loop();
}