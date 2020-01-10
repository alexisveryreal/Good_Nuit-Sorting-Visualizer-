 //p5.js setup

 let values = [];
 let loops = 0;
 let swaps = 0;
 let cycles = 1;
 let lines = false;
 let numLines = 5;
 let finished = false;
 let button;
 let selType, inpNum;
 let qSCalled = false;
 let curPivot, curHi, curLow


 function setup(){

     selType = createSelect();
     selType.position(10,10);
     selType.option('Merge');
     selType.option('Bubble');
     selType.option('Insertion');
     selType.option('Quick');
     selType.option('Selection');

     inpNum = createInput('5');
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

     if (!finished){
         switch(selType.value()){
             // case 'Merge':
             //     eel.merge_sort(values)();
             //     qSCalled = false;
             //     break;
             // case 'Bubble':
             //     eel.bubble_sort(values)();
             //     qSCalled = false;
             //     break;
             // case 'Selection':
             //     eel.selection_sort(values)();
             //     qSCalled = false;
             //     break;
             // case 'Insertion':
             //     eel.insertion_sort(values)();
             //     qSCalled = false;
             //     break;
             // case 'Quick':
             //     if(!qSCalled){
             //         eel.quicksort(values, 0, values.length -1)();
             //         qSCalled = true;
             //     }
             //     break;
             default:
                 eel.bubble_sort(values)
                 break; 
         }
     } else {
         console.log("finished");
         noLoop();
     }

     for(i = 0; i < values.length; i++){
         let col = color(values[i], height, height);
         let location = map(i, 0, values.length, 0, width);
         colorMode(RGB);
         switch(i) {
             default:
                 stroke(col);
                 fill(col);
                 break;
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
     finished = false;
     qSCalled = false;
     loop();
 }