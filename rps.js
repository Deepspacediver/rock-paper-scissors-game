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
       console.log("You lose! Rock beats Scissors");
        computerWins += 1;
        return computerWins;
      } 
      else if (computerChoice == "paper" && playerChoice == "rock"){
        console.log("You lose! Paper beats Rock");
        computerWins += 1;
        return computerWins;
      } 
      else if (computerChoice == "scissors" && playerChoice == "paper"){
        console.log("You lose! Scissors beats Paper");
        computerWins += 1;
        return computerWins;
      }
      else if (computerChoice == "rock" && playerChoice == "paper"){
        console.log("You win! Paper beats Rock");
        playerWins += 1;
        return playerWins;
      }
      else if (computerChoice == "paper" && playerChoice == "scissors"){
        console.log("You win! Scissors beat Paper");
        playerWins += 1;
        return playerWins;
      }
      else if (computerChoice == "scissors" && playerChoice == "rock"){
        console.log("You win! Rock beats Scissors");
        playerWins += 1;
        return playerWins;
      }
      else if(computerChoice == playerChoice){
          let roundResult = `Computer has also chosen ${playerChoice}, it's a tie!`;
           console.log(roundResult);
        }
        else{
            console.log("Wrong input");
        }
    };
//console.log(singleRound(computerChoice, playerChoice));


//}
//if(computerWins > playerWins) {
//    console.log(`You lost - Computer:${computerWins} vs You: ${playerWins} `);
//} else if (computerWins < playerWins){
//    console.log(`You won - Computer:${computerWins} vs You: ${playerWins} `);
//} else {
///    console.log(`Its a tie! Computer:${computerWins} vs You: ${playerWins} `)
///}