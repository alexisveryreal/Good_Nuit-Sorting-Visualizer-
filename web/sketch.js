//p5.js setup

let values = [];
let loops = 0;
let swaps = 0;
let cycles = 0;
let lines = false;
let numLines = 200;

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, height);
    for(i = 0; i < numLines; i++){
        values[i] = random(height);
    }
}

function draw(){
    background(0);

    for(i = 0; i < values.length; i++){
        let col = color(values[i], height, height);
        let location = map(i, 0, values.length, 0, width);
        stroke(col);
        if(lines) {
            line(location, height, location, height - values[i]);
        } else {
            if (cycles <= 10) noStroke();
            fill(col);
            rect(location, height-values[i], width/numLines, height);
        }
    }

}