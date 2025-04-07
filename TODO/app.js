let ul=document.querySelector("ul");
let inp=document.querySelector("input");
let btn=document.querySelector("#btn");


btn.addEventListener("click",()=>{
   let item=document.createElement("li");
   let delBtn=document.createElement("button");
   delBtn.classList.add("delete")

   delBtn.innerText="delete";
   item.innerText=inp.value;

   item.appendChild(delBtn);
   ul.appendChild(item);
   inp.value="";

});

ul.addEventListener("click",(event)=>{
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        
    }
})

// let delBtns=document.querySelectorAll(".delete");
// for(let delBtn of delBtns)
// {
//     delBtn.addEventListener("click",()=>{
//         console.log("button was clicked");
// let par=delBtn.parentElement;
// console.log(par);
// par.remove();
//     }); }
