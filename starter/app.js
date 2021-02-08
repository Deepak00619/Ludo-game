




var scores,roundScore,activePlayer,gamePlaying,lastDice;

init();

//dice=Math.floor(Math.random()*6)+1;

// text-content :- to change the textcontent variable.
//document.querySelector('#current-'+activePlayer).textContent=dice;

//document.querySelector('#current-'+ activePlayer).innerHTML='<em>'+ dice +'</em>'; 
// html should be written inside '...'


// this function is anonymous and cant access outside.
document.querySelector('.btn-roll').addEventListener('click',function(){
     
    if(gamePlaying)
    {
        // Random no.
     var dice=Math.floor(Math.random()*6)+1;

     // Display the result
     var diceDOM=document.querySelector('.dice');
     diceDOM.style.display='block';
     diceDOM.src='dice-'+dice+'.png';
 
     // update the round score If the rolled no WAS not 1.
      if(dice!==1)
      {
          roundScore+=dice;
          document.querySelector('#current-'+ activePlayer).textContent=roundScore;
      }
      else{
         
         nextPlayer();
 
     //      document.querySelector('.player-0-panel').classList.remove('active');
     //      document.querySelector('.player-1-panel').classList.add('active');
       }

       lastDice=dice;    

    }
    
})

document.querySelector('.btn-hold').addEventListener('click',function(){

    if(gamePlaying)
    {

         // Add current score to global score
    scores[activePlayer] += roundScore;



    // Update the UI
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

    // check if the player won the game
    if(scores[activePlayer]>=20)
    {
        document.querySelector('#name-'+ activePlayer).textContent ='winner';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
        gamePlaying=false;

    }else{
        nextPlayer();
    }
    }


    // next player
    //nextPlayer();
});

function nextPlayer(){

    activePlayer===0 ?activePlayer=1:activePlayer=0;
    roundScore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    // toggling feature of classList.

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none';
}

// new Player
document.querySelector('.btn-new').addEventListener('click',init)


function init()
{
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;

    document.querySelector('.dice').style.display= 'none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0'; 
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}
