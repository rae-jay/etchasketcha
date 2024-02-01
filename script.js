const boxBox = document.querySelector(".boxBox");
const input = document.querySelector("input");
const genBtn = document.querySelector("button");


const canvasSize = 800;
boxBox.style.width = canvasSize + "px";
boxBox.style.heigh = canvasSize + "px";

genBtn.addEventListener('click', () => inputCheck());


//OKAY this actually has to go because amount in grid is supposed to be flexible but i LIKED it so it STAYS HERE
//border * 2 cuz it's on two sides of the element
//can set borderWidth const to 0 to remove entirely
//const elementSize = 50;
//const borderWidth = 0;
//boxBox.style.width = (gridSize * elementSize) + (borderWidth * gridSize * 2) + "px";
//boxBox.style.height = (gridSize * elementSize) + (borderWidth * gridSize * 2) + "px";

generateCanvas(30);


/*okay so when taking input, if it's a number >100, roll it back to 100 (or less honestly)
but if it ISN'T a number at all, just don't accept it, don't do anything except clear the input box */


function randomColorValue(){
    return Math.round( Math.random() * (360-0) + 0 );
}


function inputCheck(){
    if(input.value != "" && isNaN(input.value) == false){
        let gridSize;
        if(input.value > 80){
            gridSize = 80;
        }
        else{
            gridSize = input.value;
        }
        generateCanvas(gridSize);
    }
    else{
        input.value = "";
    }
}



function generateCanvas(gridSize){
    while(boxBox.firstChild){
        boxBox.removeChild(boxBox.lastChild);
    }

    for(x = 0; x < gridSize; x++){
        for(y = 0; y < gridSize; y++){
            const newBox = document.createElement("div");
            newBox.className = "gridBox";
    
            console.log(": " + (canvasSize/gridSize))
            newBox.style.width = canvasSize/gridSize + "px";
            newBox.style.height = canvasSize/gridSize+ "px";
            //newBox.style.width = elementSize+"px";
            //newBox.style.height = elementSize+"px";
            //newBox.style.borderStyle = "solid";
            //newBox.style.borderWidth = borderWidth + "px";
    
            newBox.style.backgroundColor = "hsl(" + randomColorValue() + ",75%,75%)";

            /*okay i was going to do the 'progressive darkening' extra credit but that 
            looks like Actual Hell since it doesn't seem possible to fetch the hsl version, i don't want to
            figure out the 0f0f0f sorta thing right now and figure out how to make that lower for every random
            gd color i could possibly have
            it would be doable in b&w but i Dont Want To with how it is right now, and i am The Sleepies so sue me
            */

            newBox.addEventListener('mouseenter', function() {
                newBox.style.backgroundColor = "gray";
            });
    
            boxBox.appendChild(newBox);
        }
    }
}