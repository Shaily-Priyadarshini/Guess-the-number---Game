'use strict';
let value=Math.trunc(Math.random()*20)+1;
console.log(document.querySelector('.check').addEventListener('click',function(){
    let num=Number(document.querySelector('.ip-number').value);
    let score=Number(document.querySelector('.score').textContent);
    let highscore=Number(document.querySelector('.highscore').textContent);
    if (num>value){
        document.querySelector('.state').textContent="Too High!!!";
        score=score-1
        document.querySelector('.score').textContent=`${score}`;
        document.querySelector('.ip-number').value="";

    }
    else if(value>num){
        document.querySelector('.state').textContent="Too Low!!!";
        score=score-1
        document.querySelector('.score').textContent=`${score}`;
        document.querySelector('.ip-number').value="";
    

    }
    else
    {
        document.querySelector('.state').textContent="🎉 correct answer";
        document.body.style.backgroundColor='green';
        document.querySelector('.ip-number').style.backgroundColor='yellow';
        highscore=highscore>score?highscore:score;
        document.querySelector('.highscore').textContent=`${highscore}`;
        document.querySelector('.number').textContent=`${num}`;
    }
}))
console.log(document.querySelector('.again').addEventListener('click',function(){
    value=Math.trunc(Math.random()*20)+1;
    let score=(document.querySelector('.score').textContent=20);
    document.body.style.backgroundColor=' rgb(41, 39, 39)';
    document.querySelector('.state').textContent="Start guessing...";
    document.querySelector('.ip-number').value="";
    document.querySelector('.number').textContent="?";
}))