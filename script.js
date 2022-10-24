
const choices = ["rock", "paper", "scissors"];

function getComputerChoice () {
  let x = Math.floor(Math.random() * 3);
  return choices[x];
}  
