
const choices = ["rock", "paper", "scissors"];

function getComputerChoice () {
  let x = Math.floor(Math.random() * 3);
  return choices[x];
}

function getPlayerChoice () {
  let choice = prompt("Enter Rock, Paper or Scissors");
  return choice.toLowerCase();
}

function playRound (C, P) {
  let comp;
  let player;

  for (let i=0; i<3; i++){
    if (C == choices[i])
      comp = i
    if (P == choices[i])
      player = i
  } // associating each choice with a number so its easy to determine which choice wins the round.


    if (player == comp)
      return "Tie! You both chose "+C;

    else if ( ((player + 2) % 3) == comp)
      return "You win! "+P+" beats "+C;

    else if ( ((player + 1) %3) == comp)
      return "You lose! "+C+" beats "+P;

    else return "Invalid choice";
}

function game () {
  let playerscore = 0;
  let compscore = 0;
  let round;
  while ((playerscore < 5) && (compscore < 5)) {
    round = playRound( getComputerChoice(), getPlayerChoice() )
    console.log(round);

    if (round.includes("You win"))
      playerscore++;
    else if (round.includes("You lose"))
      compscore++;
  }

  if (playerscore == 5)
    console.log("You win the game!");
  else
    console.log("You lose the game!")
}

game();
