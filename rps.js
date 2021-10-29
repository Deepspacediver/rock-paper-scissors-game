let arrayRockPaperScissors = ["rock", "paper", "scissors"];
let computerWins;
let playerWins;

for (let i = 0; i<=4; i++) {
    

function computerPlay(){
    let computerChoice = arrayRockPaperScissors[Math.floor(Math.random() * arrayRockPaperScissors.length)];
    return computerChoice;
};
let computerChoice = computerPlay();
console.log(computerChoice);

let playerChoice = prompt("Choose Rock, Paper or Scissors: ").toLowerCase();
console.log("Player's choice:", (playerChoice));


function singleRound(computerChoice, playerChoice){
    if (computerChoice == "rock" && playerChoice == "scissors"){
        let roundResult = "You lose! Rock beats Scissors";
        return roundResult;
      } 
      else if (computerChoice == "paper" && playerChoice == "rock"){
        let roundResult = "You lose! Paper beats Rock";
        return roundResult;
      } 
      else if (computerChoice == "scissors" && playerChoice == "paper"){
        let roundResult = "You lose! Scissors beat Paper";
        return roundResult;
      }
      else if (computerChoice == "rock" && playerChoice == "paper"){
        let roundResult = "You win! Paper beats Rock";
        return roundResult;
      }
      else if (computerChoice == "paper" && playerChoice == "scissors"){
        let roundResult = "You win! Scissors beat paper";
        return roundResult;
      }
      else if (computerChoice == "scissors" && playerChoice == "rock"){
        let roundResult = "You win! Rock beats Scissors";
        return roundResult;
      }
      else if(computerChoice == playerChoice){
          let roundResult = `Computer has also chosen ${playerChoice}, it's a tie!`;
           return roundResult;
        }
        else{
            console.log("Wrong input")
        }
    };
console.log(singleRound(computerChoice, playerChoice));


}
