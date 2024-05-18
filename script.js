let options=document.querySelectorAll(".options");
let result=document.querySelector("#result");
let us=document.querySelector("#u-s");
let cs=document.querySelector("#c-s");
let msg=document.querySelector("span");
let restartBtn=document.querySelector("#restart-btn");

let userScore=0;
let compScore=0;

let reset=()=>{
    userScore=0;
    us.innerText=userScore;
    compScore=0;
    cs.innerText=compScore;
    msg.innerText="Start Your Move"
    msg.style.background="blue";
    msg.style.color="white";
} ;
restartBtn.addEventListener("click",()=>{
    reset();
});
let genCompChoose=()=>{
    let compOptions=["rock","paper","scissor"];
    let compIdx=Math.floor(Math.random()*3);
    return compOptions[compIdx];
};
let gameDraw=()=>{
    console.log("game was draw");
    result.innerText="Game Was Draw";
    msg.style.background="black";
    msg.style.color="white";
};
let showWinner=(userWin,userChoose,compChoose)=>{
    if(userWin){
        userScore++;
        us.innerText=userScore;
        result.innerText=`You won! your ${userChoose} defeated ${compChoose}`;
        msg.style.background="green";

    }else{
        compScore++;
        cs.innerText=compScore;
        result.innerText=`You Lose! ${compChoose} defeated Your ${userChoose}`
        msg.style.background="red";
    }
};
let gameRule=(userChoose)=>{
    console.log(userChoose);
    let compChoose = genCompChoose();
    console.log(compChoose)
    if(userChoose === compChoose){
        gameDraw();
    }else{
        let userWin=true;
        if(userChoose==="rock"){
            userWin=compChoose==="paper" ? false : true ;
        }else if(userChoose==="paper"){
            userWin=compChoose==="scissor" ? false : true ;
        }else if(userChoose==="scissor"){
            userWin=compChoose==="rock" ? false : true ;
        }
        showWinner(userWin, userChoose , compChoose);
    }
};
options.forEach((option)=>{
    option.addEventListener("click",()=>{
        let userChoose=option.getAttribute("id")
        gameRule(userChoose);
    })
});
