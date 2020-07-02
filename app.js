/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

// declare score vraibales and activePlayer variable
var scores,currentScore,activePlayer,diceImg,playGame;
diceImg = document.querySelector("img");
init();

// rolling dice event
document.querySelector(".btn-roll").addEventListener('click',function(){
    if(playGame){
        // Roll the dice
        diceImg.style.display = "block";
        var dice = Math.ceil(Math.random()*6);
        diceImg.src = 'dice-'+dice+'.png';
        if(dice !== 1){
            // if dice value not 1
            // add the dice value to current score
            currentScore += dice;
            document.querySelector('#current-'+activePlayer).textContent = currentScore;
        }else{
            nextPlayer();
        }
    }
});

// Hold the current score and add to GLOBAL score
document.querySelector(".btn-hold").addEventListener("click",function(){
    if(playGame){
        // update the total score of current player and display it
        scores[activePlayer] += currentScore;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
        // declare winner
        if(scores[activePlayer] >= 20){
            document.querySelector("#name-"+activePlayer).textContent = "WINNER!";
            document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
            diceImg.style.display = "none";
            playGame = false;
        }
        else{
            nextPlayer();
        }
    }
});

// chnage the player alternatively
function nextPlayer(){
    // if dice value is 1 then make currentScore of the player 0
    currentScore = 0;
    document.querySelector('#current-'+activePlayer).textContent = currentScore;
    // turn the activePlayer 
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    // toggle the active class inorder to show in document
    document.querySelector(".player-0-panel").classList.toggle('active'); 
    document.querySelector(".player-1-panel").classList.toggle('active');
}

// fuction for setting all the scores to 0 
function init(){
    // set scores to 0 and activePlayer is 1st player
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    diceImg.style.display = 'none';
    // In document aldo chage the text content of the scores
    document.querySelector("#score-0").textContent = 0;
    document.querySelector("#score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    playGame = true;
}


