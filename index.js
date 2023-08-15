function makeBubble(){
    let bbl_boxes = "";
for(let i = 0; i <= 113; i++){
    bbl_boxes += `<div class="bbl-box">${Math.floor(Math.random() * 10)}</div>`
}

document.querySelector("#pannel-bottom").innerHTML = bbl_boxes;
}
let timer = 60 // or we can directly assign the value of 60 seconds
function runTimer(){

    let setTimer = setInterval(function(){
      if(timer > 0 ){  timer--;
        document.querySelector(".timer").textContent = timer;
    }
    else{
        clearInterval(setTimer);
    }
    }, 1000)
 
}

function getNewHit(){
    let newHit = Math.floor(Math.random() * 10);
    document.querySelector(".hit").textContent = newHit;
}



makeBubble();
runTimer();
getNewHit()