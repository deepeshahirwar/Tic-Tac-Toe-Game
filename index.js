let boxes = document.querySelectorAll(".box"); 
let resetBtn = document.querySelector(".resetBtn"); 
let newgameBtn = document.querySelector(".newBtn"); 
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
  
let turnO = true; // winnerO, winnerX
// store winning patterns 
const winnersPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]; 

  
boxes.forEach((box)=>{
   box.addEventListener("click" ,()=>{
    if(turnO){
     box.innerHTML = "O"; 
     turnO = false;
    }else{
        box.innerHTML = "X";   
        turnO = true; 
    }
   box.disabled = true; 
    
   checkWinner();
   })
})  
// for reseting game 
const resetGame = ()=>{
    turnO = true; 
    enableBoxs();
    msgContainer.classList.add("hide");
}
// for dissabling  box  when winner has been show
const disableBoxs = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}   
// for enabling  box  
const enableBoxs = ()=>{
    for(let box of boxes){
        box.disabled = false; 
        box.innerHTML = "";
    }
} 

// for showing winner of the game  
let draw =  false;
const showWinner = (winner)=>{ 
    if(!draw){
    msg.innerHTML = `Congratulations , winner is ${winner}`
    msgContainer.classList.remove("hide"); 
    disableBoxs(); 
    }else{
        msg.innerHTML = `Game is draw, please play again`
        msgContainer.classList.remove("hide"); 
        disableBoxs(); 
    }
 
}
// for checking winner  

const checkWinner = ()=>{
    for(let pattern of winnersPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText; 
         if(val1 != "" &&val2 != "" && val3 != ""){
         if(val1 === val2 && val2 === val3){ 
         showWinner(val1); 
         return;
        }
        }
        
    } 

   // If no winner is found in any pattern, check for a draw
    let isDraw = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            isDraw = false;
            break;
        }
    }

    if (isDraw) {
        draw = true;
        showWinner("Draw");
    }
   
} 
 
newgameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);