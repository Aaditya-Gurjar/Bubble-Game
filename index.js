function makeBubble(){
    let bbl_boxes = "";
for(let i = 0; i <= 113; i++){
    bbl_boxes += `<div class="bbl-box">${Math.floor(Math.random() * 10)}</div>`
}

document.querySelector("#pannel-bottom").innerHTML = bbl_boxes;
}
let timer = 60; // or we can directly assign the value of 60 seconds
function runTimer(){

    let setTimer = setInterval(function(){
      if(timer > 0 ){  timer--;
        document.querySelector(".timer").textContent = timer;
    }
    else{
        clearInterval(setTimer);
        document.querySelector("#pannel-bottom").innerHTML = "<h1> Game Over </h1>";
    }
    }, 1000)
 
}

// When ever clicked elemet is equals to Hit then Score will increase.
function IncreaseScore() {
    let scoreElement = document.querySelector(".score");
    let score = Number(scoreElement.textContent);
    score += 10;
    scoreElement.textContent = score;
    getNewHit();
    makeBubble();
    
}


let newHit = 0;
function getNewHit(){
     newHit = Math.floor(Math.random() * 10);
    document.querySelector(".hit").textContent = newHit;
}

 document.querySelector("#pannel-bottom").addEventListener('click', (dets) =>{
        let clickedNumber = Number(dets.target.textContent);
        if(clickedNumber === newHit){
            IncreaseScore();
            // console.log(true);
        }
       
    })


makeBubble();
runTimer();
getNewHit()