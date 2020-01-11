 //p5.js setup

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


 function setup(){

     selType = createSelect();
     selType.position(10,10);
    //  selType.option('Merge');
     selType.option('Bubble');
    //  selType.option('Insertion');
     selType.option('Quick');
     selType.option('Selection');

     inpNum = createInput('25');
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
            //  case 'Merge':
            //      merge_sort(values);
            //      qSCalled = false;
            //      break;
             case 'Bubble':
                 bubble_sort();
                 qSCalled = false;
                 break;
             case 'Selection':
                 selection_sort();
                 qScalled = false;
                 break;
            //  case 'Insertion':
               
            //      break;
             case 'Quick':
                 if(!qSCalled){
                    quick_sort(values, 0, values.length -1);
                    qSCalled = true;
                 }
                 break;
             default:
                 bubble_sort();
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
             case curHi:
                 stroke(0);
                 fill(0,255,0);
                 break;
             case curLow:
                 stroke(0);
                 fill(0,0,255);
                 break;
             case curPivot:
                 stoke(0);
                 fill(255);
                 break;
             default:
                 stroke(col);
                 fill(col);
                 break;
         }
         colorMode(HSB, height);
         rect(location, height-values[i], width/numLines, height);
     }
 }

 bubble_sort = function(){

    if(swaps < values.length - loops - 1){
        if(numLines >= 50) cycles = 10;
        else if (numLines >= 200) cycles = 50;
        else if (numLines >= 500) cycles = 100;

        for(i = 0; i < cycles; i++){
            let a = values[swaps];
            let b = values[swaps+1];
            if(a > b){
                swap(values, swaps, swaps+1);
            }
            swaps++;
        }
    } else {
        swaps = 0;
        loops++;
    }
    if (loops == values.length) finished = true;
 }


 selection_sort = function(){
     for(i = 0; i < values.length - loops - 1; i++){
         let a = values[i];
         let b = values[i+1];
         if(a > b){
             swap(values, i, i+1);
         }
     }
    if ( loops == values.length) finished = true;
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
    //instead of using temp variable pog
    [arr[a], arr[b]] = [arr[b], arr[a]];
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