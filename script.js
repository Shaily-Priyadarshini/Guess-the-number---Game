'use strict';
let value=Math.trunc(Math.random()*20)+1;
//function 

document.querySelector('.check').addEventListener('click',function(){
    let num=Number(document.querySelector('.ip-number').value);
    let score=Number(document.querySelector('.score').textContent);
    let highscore=Number(document.querySelector('.highscore').textContent);
    const change=function(){
        score=score-1
        document.querySelector('.score').textContent=`${score}`;
        document.querySelector('.ip-number').value="";
    }
    if(num>20){
        document.querySelector('.state').textContent="Out of range!!!";
        change();
    }

    else if (num>value){
        document.querySelector('.state').textContent="Too High!!!";
        change();
    }
   
    else if(value>num){
        document.querySelector('.state').textContent="Too Low!!!";
        change();
    
    }
    else
    {
        document.querySelector('.state').textContent="🎉 correct answer";
        document.body.style.backgroundColor='#101820FF';
        document.querySelector('.ip-number').style.backgroundColor='#FEE715FF ';
        highscore=highscore>score?highscore:score;
        document.querySelector('.highscore').textContent=`${highscore}`;
        document.querySelector('.number').textContent=`${num}`;
    }
})
document.querySelector('.again').addEventListener('click',function(){
    value=Math.trunc(Math.random()*20)+1;
    let score=(document.querySelector('.score').textContent=20);
    document.body.style.backgroundColor=' rgb(41, 39, 39)';
    document.querySelector('.state').textContent="Start guessing...";
    document.querySelector('.ip-number').value="";
    document.querySelector('.number').textContent="?";
    document.querySelector('.ip-number').style.backgroundColor=' rgb(41, 39, 39)';
})