


var scores,roundScore,activePlayer;

scores=[0,0];
roundScore=0;
activePlayer=1;

//dice=Math.floor(Math.random()*6)+1;

// text-content :- to change the textcontent variable.
//document.querySelector('#current-'+activePlayer).textContent=dice;

//document.querySelector('#current-'+ activePlayer).innerHTML='<em>'+ dice +'</em>'; 
// html should be written inside '...'

document.querySelector('.dice').style.display= 'none';

document.querySelector('.btn-roll').addEventListener('click',function(){
     
    // Random no.
     var dice=Math.floor(Math.round()*6)+1;

    // Display the result
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';

    // update the round score If the rolled no WAS not 1.

})