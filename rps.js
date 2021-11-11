const arrayRockPaperScissors = ["rock", "paper", "scissors"];
let computerWins = 0;
let playerWins = 0;
let computerChoice;

function computerPlay(){
    computerChoice = arrayRockPaperScissors[Math.floor(Math.random() * arrayRockPaperScissors.length)];
    return computerChoice;
};
 computerChoice = computerPlay();

const buttons = document.querySelectorAll('button');
//console.log(buttons)

function playerChooses(e){
  let storedPlayerChoice = e.target.outerText.toLowerCase();
  singleRound(computerChoice, storedPlayerChoice);
}

buttons.forEach(button => button.addEventListener('click', playerChooses))


function singleRound(computerChoice, playerChoice){
  computerPlay();
    if (computerChoice == "rock" && playerChoice == "scissors"){
        computerWins += 1;
        displayResult()
        return computerWins;
      } 
      else if (computerChoice == "paper" && playerChoice == "rock"){
        computerWins += 1;
        displayResult()
        return computerWins;
      } 
      else if (computerChoice == "scissors" && playerChoice == "paper"){
        computerWins += 1;
        displayResult()
        return computerWins;
      }
      else if (computerChoice == "rock" && playerChoice == "paper"){
        playerWins += 1;
        displayResult()
        return playerWins;
      }
      else if (computerChoice == "paper" && playerChoice == "scissors"){
        playerWins += 1;
        displayResult()
        return playerWins;
      }
      else if (computerChoice == "scissors" && playerChoice == "rock"){
        playerWins += 1;
        displayResult()
        return playerWins;
      }
      else if(computerChoice == playerChoice){
          results.innerText = `Computer has also chosen ${playerChoice}
              Computer wins: ${computerWins} vs Player wins: ${playerWins}`;
        }
    };

let currentScore;
let finalScore;

let results = document.querySelector('div#game-result');

function displayResult(){
  if(computerWins == 5){
    results.innerText = `Computer has won with ${computerWins} points to Player's ${playerWins} points`
    resetSCore()
  } else if(playerWins == 5){
    results.innerText = `Player has won with ${playerWins} points to Computer's ${computerWins} points`
    resetSCore()
  }
  else{
  results.innerText = `Computer wins: ${computerWins} vs Player wins: ${playerWins}`;
  }
}
 
function resetSCore(){
  playerWins = 0;
  computerWins = 0;
}

