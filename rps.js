let arrayRockPaperScissors = ["rock", "paper", "scissors"];


function computerPlay(){
    let computerChoice = arrayRockPaperScissors[Math.floor(Math.random() * arrayRockPaperScissors.length)];
    return computerChoice;
};
console.log(computerPlay());

let playerChoice = prompt("Choose Rock, Paper or Scissors: ").toLowerCase();


function singleRound(computerPlay, playerChoice){



}