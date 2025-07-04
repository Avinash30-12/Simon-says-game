let gameSeq =[];
let userSeq = [];

let btns= ["yellow" , "green", "red","purple"];
let Started = false;
let level=0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" ,function(){
      if(Started == false){
        console.log("Game started");
        Started = true;

        levelUp();
      }
});

function btnFlash(btn){
  btn.classList.add("flash");
 
  setTimeout(()=> {
  btn.classList.remove("flash");
 },250);
};

function levelUp() {
    userSeq= [];
    level++;
    h2.innerText = `level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}
function checkAns(idx){

    if(userSeq[idx]=== gameSeq[idx]){
      if(userSeq.length == gameSeq.length){
        setTimeout(levelUp , 1000);
      }
    }else{
        h2.innerHTML= `game over! Your score is <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        reset();
    }
}

function btnPress(){
  console.log("this");
  let btn = this;
  btnFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
     btn.addEventListener("click" , btnPress);
}

function reset(){
    Started = false;
    userSeq= [];
    gameSeq= [];
    level =0;
}