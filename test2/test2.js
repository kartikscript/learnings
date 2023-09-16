"use strict";

// const secretNumber=Math.trunc(Math.random()*20+1);

// document.querySelector('.check').addEventListener('click',function(){

//   const guess=Number(document.querySelector('.input').value);
  
//   if(!guess){
//     document.querySelector('.response').textContent='Type A Number!'
//   }else if(guess===secretNumber){
//     document.querySelector('.response').textContent='Correct Number!!'
//   }else if(guess > secretNumber){
//     document.querySelector('.response').textContent='Too High!'
//   }else if(guess<secretNumber){
//     document.querySelector('.response').textContent='Too Low!'

//   }
// })

let secretNumber=Math.trunc(Math.random()*20+1);
let score=20;
let highScore=0;
const displayResponse=function(response){
document.querySelector('.response').textContent=response
}
// console.log(displayResponse('wow bootifull'))

document.querySelector('.check').addEventListener('click',function(){

  const guess=Number(document.querySelector('.input').value);
  
  if(!guess){
    // document.querySelector('.response').textContent='Type A Number!'
    displayResponse('Type A Number!');
  }else if(guess===secretNumber){
    displayResponse('Correct Number!!');
    document.querySelector('.box').textContent=secretNumber;
if(score>highScore){
  highScore=score;
  document.querySelector('.score2').textContent=highScore;
}
   
    document.querySelector('body').style.backgroundColor='#000';
    document.querySelector('.box').style.padding='0 8rem';
  // }else if(guess > secretNumber){
  //   if()
  //   document.querySelector('.response').textContent='Too High!'
  // }else if(guess<secretNumber){
  //   document.querySelector('.response').textContent='Too Low!'

  // }
  }else if(guess!==secretNumber){
    guess>secretNumber? displayResponse('Too High!'): displayResponse('Too Low!');
    score--;
    document.querySelector('.score1').textContent=score;
    if(score<1){
      displayResponse('You Lost!');
      document.querySelector('.score1').textContent=0;
  }
}
})

document.querySelector('.again').addEventListener('click',function(){
  secretNumber=Math.trunc(Math.random()*20+1);
 score=20;
document.querySelector('.response').textContent='Start Guessing...';
document.querySelector('.score1').textContent=score;
document.querySelector('.box').textContent='?';
document.querySelector('.input').value=null;
document.querySelector('body').style.backgroundColor='#222';
document.querySelector('.box').style.padding='0 3.2rem';
})