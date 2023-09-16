'use strict';

const score0El=document.querySelector('#score-0');
const score1El=document.querySelector('#score-1');
const currentScore0El=document.getElementById('current-0');
const currentScore1El=document.getElementById('current-1');

const backColor0=document.querySelector('.container1');
const backColor1=document.querySelector('.container2');

const diceImg=document.querySelector('.dice-img');
diceImg.classList.add('hidden');
const btnRoll=document.querySelector('.btn-roll');
const btnHold=document.querySelector('.btn-hold');
const btnNew=document.querySelector('.btn-new');

let currentScore=0;
let activePlayer=0;
let scores=[0,0];
let playing=true;



btnRoll.addEventListener('click',function(){
  if(playing){
//setting th dice number and dice
const diceNo=Math.trunc(Math.random()*6)+1;
diceImg.classList.remove('hidden');
diceImg.src=`dice${diceNo}.png`;
//putting conditioins
if(diceNo!==1){
currentScore+=diceNo;
// currentScore0El.textContent=currentScore;
document.getElementById(`current-${activePlayer}`).textContent=currentScore;
}else{
document.getElementById(`current-${activePlayer}`).textContent=0;

currentScore=0;
  activePlayer=activePlayer===0?1:0;
  backColor0.classList.toggle('active');
  backColor1.classList.toggle('active');

}
  }
})



btnHold.addEventListener('click',function(){
  if(playing){
  scores[activePlayer]+=currentScore;
  document.getElementById(`score-${activePlayer}`).textContent=scores[activePlayer];
  
  if(scores[activePlayer]>=20){
    playing=false;
    document.querySelector(`.container${(activePlayer+1)}`).classList.add('winner');
diceImg.classList.add('hidden');
  document.getElementById(`player-${activePlayer}`).style.color='#f03e3ea2';
  }else{
    document.getElementById(`current-${activePlayer}`).textContent=0;

currentScore=0;
  activePlayer=activePlayer===0?1:0;
  backColor0.classList.toggle('active');
  backColor1.classList.toggle('active');
  }
}
}) 

btnNew.addEventListener('click',function(){
  playing=true;
  currentScore=0;
  document.querySelector(`.container${activePlayer+1}`).classList.remove('winner');
  activePlayer=0;
  scores=[0,0];
  document.getElementById(`player-${activePlayer}`).style.color='#222';
currentScore0El.textContent=0;
currentScore1El.textContent=0;
score0El.textContent=0;
score1El.textContent=0;
backColor0.classList.add('active');
backColor1.classList.remove('active');

  
})