let boxes=document.querySelectorAll(".box");                 //sare button ko access kar rahe hai
let resBtn=document.querySelector("#res-btn");               // reset button ko access kar rahe hai
let newGameBtn=document.querySelector("#new-btn");           //new game button ko access kiya
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true; //playerO,playerX 
let count=0;    //condition for Draw

const winPatterns=[                //winning patterns ka array banaya
                   [0,1,2],
                   [0,3,6],
                   [0,4,8],
                   [1,4,7],
                   [3,4,5],
                   [2,5,8],
                   [6,7,8],
                   [6,4,2]];

const resetGame=()=>{
  turnO=true;
  count=0;              // condition for Draw
  enableBoxes();
  msgContainer.classList.add("hide");
}   

boxes.forEach((box)=> {
                           box.addEventListener("click",()=>
                            
                            {console.log("button was clicked");

                            if(turnO)  //we declare in line no.3 turnO is true
                            {                              //playerO
                                box.innerText="O";        //runtime HTML
                               box.style.color="red";
                                turnO=false;
                            }
                            else
                            {                              //playerX
                                box.innerText="X";         //runtime HTML
                              box.style.color="blue";
                                turnO=true;
                            }
                             box.disabled=true;             //button ko disabled kiya
                             count++;

                       let isWinner=checkWinners();  //to check who was the winner
                       
                       if(count===9 && !isWinner)                                       //Condition for Draw
                        {
                          showDraw();}
                }
              )              
           }
        );
                        



const showDraw=()=>{                                          //Game is Draw
  msg.innerText=`Game is Draw,Restart the Game`;
  
  msgContainer.classList.remove("hide");
  disableBoxes();
}


const disableBoxes=()=>{                                                                    // To disable button
                         for(let box of boxes)
                             {
                                box.disabled=true;
                               }
                                 }
         
const enableBoxes=()=>{                                                                   // To enable button
                         for(let box of boxes)
                            {
                              box.disabled=false;
                              box.innerText="";
                               }
                                  }
const showWinner=(winner)=>{                                                   // To show Winner
  msg.innerText=`Congratulation,Winner is ${winner}`;                  
  
  msgContainer.classList.remove("hide");
  disableBoxes();
}








const checkWinners=()=>{      
                        //function to check who was the winner
                       for(let pattern of winPatterns)
                            {
                                 let pos1Val=boxes[pattern[0]].innerText;
                                 let pos2Val=boxes[pattern[1]].innerText;
                                 let pos3Val=boxes[pattern[2]].innerText;             //simple and interesting concept  
                        
                                 if(pos1Val!=""&& pos2Val!=""&& pos3Val!="")
                                 {
                                   if(pos1Val===pos2Val && pos2Val===pos3Val)
                                      {
                                         console.log("Winner",pos1Val); 
                                        showWinner(pos1Val);
                                      return true; }              //condition for Draw
                      }
                  }
              };   

newGameBtn.addEventListener("click",resetGame);
resBtn.addEventListener("click",resetGame);
