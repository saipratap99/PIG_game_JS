/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

// declare score vraibales and activePlayer variable
var scores,currentScore,activePlayer,diceImg;
diceImg = document.querySelector("img");
init();


function init(){
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    diceImg.style.display = 'none';
    document.querySelector("#score-0").textContent = 0;
    document.querySelector("#score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
}
