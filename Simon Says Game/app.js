let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["yellow","red","green","purple"];

let allBtns=document.querySelectorAll(".btn");       //Sare button ko access kar ke CLICK event lagaya






document.addEventListener("keypress",function ()     //Starting phase
  { if (started==false){
    console.log("Game was started");
    started=true;
    levelUp();                                      // level up functin ko call kiya
      }
 }
);





function gameFlash(btn) {                          //Game Flash karega
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn) {                      //User Flash karega
    btn.classList.add("userFlash");

    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250)
}








function levelUp(){                          //Level up hoga
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);

    gameSeq.push(randColor);           //gameArray me sequence store hua
    console.log(gameSeq); 

    gameFlash(randBtn);            //GameFlash ko call kiya
}


for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function btnPress(){               //User button ko Press karega
   let btn=this;
   console.log(btn);

   userFlash(btn);                    //User flash ko call kiya

   userColor=btn.getAttribute("id");
   userSeq.push(userColor);               //userArray me sequence Store hua

   checkAns(userSeq.length-1);               //checkAns ko call  kiya
}








function checkAns(idx){                      //checking of Answer
    // console.log("curr level:",level)
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
     
        if(userSeq.length==gameSeq.length)
        {
          setTimeout(levelUp,1000);
          }
      
    }
    else{
        highestScore(level);
        h2.innerHTML=`Game Over! Your score was <b>${level}<b><br>Press any key to start
        and highScore is ${highScore}`;
        reset();                                                                               //reset ko call kiya
       
       document.querySelector("body").style.backgroundColor="red";

       setTimeout(function(){
                          document.querySelector("body").style.backgroundColor="white";},150);
   }
}



function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

let highScore=0;
function highestScore(level){
    if(highScore<level)
    {
        highScore=level
    }
}
