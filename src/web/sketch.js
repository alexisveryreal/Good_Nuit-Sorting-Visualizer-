 //p5.js setup

 const CANVAS_WIDTH = 1000;
 const CANVAS_HEIGHT = 600;
 const NUM_OF_ELEMENTS = 200;
 const RECT_WIDTH = CANVAS_WIDTH / NUM_OF_ELEMENTS;




 let values = [];
 let loops = 0;
 let swaps;
 let cycles = 1;
 let lines = false;
 let numLines = 25;
 let finished = false;
 let button;
 let selType, inpNum;
 let qSCalled = false;
 let curPivot, curHi, curLow;
 let m,l,r;
 let rectangles = new Array(numLines);

 class Rectangle {
     constructor(value, x, y , width){
         this.value = value;
         this.x = x;
         this.y = y;

         this.width = width;
         this.height = value;

         this.active = false;
     }

     draw() {
         this.active ? fill(112,41,99) : fill(187,255,255);
         rect(this.x, this.y, this.width, this.height);
     }

     updateData(value, canvasHeight) {
         this.y = canvasHeight - value;
         this.value = value;
         this.height = value;
     }
 };


 function setup(){

    //  selType = createSelect();
    //  selType.position(10,10);
    // //  selType.option('Merge');
    //  selType.option('Bubble');
    // //  selType.option('Insertion');
    //  selType.option('Quick');
    //  selType.option('Selection');

     inpNum = createInput('25');
     inpNum.position(10, 30);
     inpNum.input(function() {
         numLines = inpNum.value();
         resetArray();
     });

     button = createButton('Restart');
     button.position(10,50);
     button.mousePressed(resetArray);
     

    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    generateRectangles();
 }

 let i = 0;

 function draw(){
     background(0);

     if (!finished){
         if(i < rectangles.length - 1){
             drawRectangles();
         }
        // drawRectangles();
        // switch(selType.value()){
        // //  case 'Merge':
        // //      merge_sort(values);
        // //      qSCalled = false;
        // //      break;
        //     case 'Bubble':
        //         bubble_sort();
        //         qSCalled = false;
                
        //         break;
        //     case 'Selection':
        //         selection_sort();
        //         qScalled = false;
                
        //         break;
        // //  case 'Insertion':
            
        // //      break;
        //     case 'Quick':
        //         if(!qSCalled){
        //         quick_sort(values, 0, values.length -1);
        //         qSCalled = true;
                
        //         }
        //         break;
        //     default:
        //         bubble_sort();
                
        //         break; 
        // }
    //  } else {
    //      console.log("finished");
    //      noLoop();
    //  }
     }
 }

 bubble_sort = function(){

    if(swaps < rectangles.length - loops - 1){
        if(numLines >= 50) cycles = 10;
        else if (numLines >= 200) cycles = 50;
        else if (numLines >= 500) cycles = 100;

        for(j = 0; j < cycles; j++){
            let a = rectangles[swaps].value;
            let b = rectangles[swaps+1].value;
            if(a > b){
                rectangles[a].active = true;
                let temp = rectangles[a].value;
                rectangles[a].updateData(rectangles[b].value, CANVAS_HEIGHT);
                rectangles[b].updateData(temp, CANVAS_HEIGHT);
                rectangles[a].active = false;
                // swap(rectangles, swaps, swaps+1);
                swaps++;
            }
        }    
    } else {
        rectangles[i].active = false;

        swaps = 0;
        loops++;
    }
    if (loops == rectangles.length) finished = true;
 }


 selection_sort = function(){
    //  for(let i = 0; i < rectangles.length - loops - 1; i++){
        if( i < rectangles.length - 1){
            drawRectangles(); 
            let minIndex = i;
            for(let j = i+1; j < rectangles.length; ++j){
                let a = rectangles[j].value;
                let b = rectangles[minIndex].value;
                if(a < b){
                    minIndex = j;
                }
            }
            rectangles[minIndex].active = true;
            if(minIndex != i){
                let tempValue = rectangles[i].value;
                rectangles[i].updateData(rectangles[minIndex].value, CANVAS_HEIGHT);
                rectangles[minIndex].updateData(tempValue, CANVAS_HEIGHT);
            }
            rectangles[i].active = false;
            ++i;
        } else {
            rectangles[i].active = false;
            finished = true;
            setGreenColorToAll();
        }
        
        // let a = values[i];
        //  let b = values[i+1];
        //  if(a > b){
        //      swap(values, i, i+1);
        //  }
    //  }
    // if ( loops == values.length) finished = true;
 }

 quick_sort = function (arr, left, right){
    //timeout so we can see the fucking sort
    setTimeout(() => {
         //Best Case: no need to sort
        if(left >= right)
        {
            return;
        }
        //pivot last element in subarray
        let pivot = arr[right];

        // "split" b/t items < pivot and items > pivot
        let cnt = left;

        //color variables so again, we can see things going on
        curPivot = cnt;
        curHi = right;
        curLow = left;

        //Traverse from LEFT to RIGHT
        for(let i =left; i <= right; i++){
            if(arr[i] <= pivot){
                swap(arr, cnt, i);
                cnt++;
                
            }
        }

        //cnt right now == pivot +1
        // hence, cnt -2 for left side
        quick_sort(arr, left, cnt-2);
        quick_sort(arr,cnt, right);

    }, 300);
 }

 swap = function (arr, a, b){
     let temp = arr[a].value;
     arr[a].updateData(arr[b].value, CANVAS_HEIGHT);
     arr[b].updateData(temp, canvasHeight);
    //instead of using temp variable pog
    // [arr[a], arr[b]] = [arr[b], arr[a]];
 }


 //This function just creates the rectangles array, NO PRINT
 generateRectangles = function(){
    for(let i = 0; i < rectangles.length; ++i){
        let randomValue = random(0, CANVAS_HEIGHT);
        let xPos = i * RECT_WIDTH;
        let yPos = CANVAS_HEIGHT - randomValue;
        rectangles[i] = new Rectangle(randomValue, xPos, yPos, RECT_WIDTH);
    }
 }

 //This function actually draws the rectanlges on the screen
 drawRectangles = function(){
     for(let i = 0; i < rectangles.length; ++i){
         rectangles[i].draw();
     }
 }

 setGreenColorToAll = function(){
     for(let i = 0; i < rectangles.length; ++i){
         rectangles[i].active = true;
     }
 }




 resetArray = function(){
     console.log('resetting')
     rectangles = [];
     for(let i = 0; i < numLines; i++){
         rectangles[i] = random(height);
     }
     generateRectangles();
     loops= 0;
     swaps = 0;
     finished = false;
     qSCalled = false;
     loop();
 }