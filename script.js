
const choices = ["rock", "paper", "scissors"];
let playerscore = 0;
let compscore = 0;
let gameStatus;

function getComputerChoice () {
  let x = Math.floor(Math.random() * 3);
  return choices[x];
}

function playRound (C, P) {
  let comp;
  let player;

  if (gameStatus == false){
    displayResult("Match over!");
    return;
  }

  for (let i=0; i<3; i++){
    if (C == choices[i])
      comp = i
    if (P == choices[i])
      player = i
  } // associating each choice with a number so its easy to determine which choice wins the round.

    if (player == comp)
      return "tie";

    else if ( ((player + 2) % 3) == comp){
        playerscore++;
        updateScore(compscore, playerscore);
        displayResult("You won the round");
    }

    else if ( ((player + 1) %3) == comp){
      compscore++;
      updateScore(compscore, playerscore);
       displayResult("You lost the round");
    }

    if (playerscore == 5){
      gameStatus = false;
      displayResult("You won the game");
    }

    else if (compscore == 5){
        gameStatus = false;
        displayResult("You lost the game");
    }
}

function displayResult (str) {
  const container = document.querySelector('.result-container');
  const prevDisplays = document.querySelectorAll('.result-container div');
  prevDisplays.forEach( (item) => container.removeChild(item));

  const display = document.createElement('div');
  display.textContent = str;
  display.style.color = '#FFFFFF';
  display.style.fontSize = '24px';
  display.style.fontWeight = 'bold';
  display.style.fontFamily = '"Arial", sans-serif';

  container.appendChild(display);
}

function updateScore (CS, PS) {
  const displayComp = document.querySelector('#CS');
  displayComp.textContent = CS;

  const displayPlayer = document.querySelector('#PS');
  displayPlayer.textContent = PS;
}

function reset () {
  playerscore = 0;
  compscore = 0;
  gameStatus = true;
  displayResult("")
  updateScore(compscore, playerscore);
}

const newMatchBtn = document.querySelector('.header button');
newMatchBtn.addEventListener('click', reset);

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
  
  playRound(getComputerChoice(), "rock") } );

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => playRound(getComputerChoice(), "paper") );

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => playRound(getComputerChoice(), "scissors") );
