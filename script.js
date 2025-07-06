let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let win=document.querySelector(".win")

let turnX=true;

const winpats = [
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnX){
        box.innerText="x";
        turnX=false;
       }
       else{
        box.innerText="o ";
        turnX=true;
       }
       box.disabled=true;
       checkwin();
    });
});

const checkwin =()=>{
    for(let pat of winpats){

    let pos1= boxes[pat[0]].innerText;/*gives values like X or O*/
    let pos2= boxes[pat[1]].innerText;
    let pos3= boxes[pat[2]].innerText;

    if(pos1 !="" && pos2!=""&&pos3!="")
    {
        if(pos1===pos2 && pos2===pos3)
            {
                console.log("winner",pos1);
                showwinner(pos1);
        }
    }
    }
};

const disable =() => {
    for(let box of boxes){
    box.disabled=true;
    }
};

const showwinner = (winner) => {
    win.innerText = `winner is ${winner}`;
    disable();
};

const enable = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText=" ";
        win.innerText="";
    }
};

const resetgame = () =>{
    turnX=true
    enable();
};

reset.addEventListener("click", () => {
    resetgame();
});
