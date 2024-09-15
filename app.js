let game=document.querySelector(".game")
let hit=document.querySelector(".hit")
let time=document.querySelector(".time")
let result=document.querySelector(".result")
let gameOver=document.querySelector(".gameover");
let gamestart=document.querySelector(".gamestart");

 
 let score=0;
 let time_score=30;
 let hit_ran;
 var timer;

 
 let newGame= (str)=>{
    gamestart.style.display="none";
    gameOver.style.display="flex";
    startbtn.innerText="New Game";
    document.querySelector(".gameover h1").innerHTML=` 
    Game ${str} <br>
     Score : ${score}`;
          
    clearInterval(timer);
    timer=null; 

    hit_ran=null;
    hit.innerHTML=hit_ran;

 }
//  newGame();
 function number(){
        gamestart.style.display="flex";
        gameOver.style.display="none";

        let clutter=""
        for(let i=1;i<106;i++){
        let ran=Math.floor(Math.random()*10) 
        clutter+=` <div id="${ran}" class="buble">${ran}</div>`;
        gamestart.innerHTML=clutter;
    
    }}
    
let newHit =()=>{
    hit_ran=Math.floor(Math.random()*10);
    hit.innerHTML=hit_ran;
}
let update_score=()=>{
    score+=10;
    result.innerHTML=score;
}

gamestart.addEventListener("click",(elem)=>{
  let choice=elem.target.id;
    if(hit_ran==choice){
        update_score();
    }
    else{   
    }
    number();
    newHit();
})
    
let start_time=()=>{
     timer= setInterval(()=>{
         if(time_score>0){
             time_score--;
             time.textContent=time_score;
             console.log(time_score)
         }
         else{
             clearInterval(timer);
             time_score=30;
             time.textContent=time_score;
             newGame("Over");

             score=0;
             result.innerHTML=score;
         }
     },1000)
 }

let startbtn=document.querySelector(".start-btn")
    startbtn.addEventListener("click",()=>{
        number();
        newHit();
        start_time()
});


document.querySelector("#pause-btn").addEventListener("click",()=>{
    newGame("Paused");
    startbtn.innerHTML="Resume";
    // time_score=60;
    // time.textContent=time_score;
    // score=0;
    // result.innerHTML=score;
})

document.querySelector("#reset-btn").addEventListener("click",()=>{
    newGame("Over");
    startbtn.innerHTML="New Game";
    time_score=30;
    time.textContent=time_score;
    score=0;
    result.innerHTML=score;
})

