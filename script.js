const CHOICE = ["Rock", "Paper", "Scissor"]


function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * CHOICE.length);
  return CHOICE[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  const WIN = `You win! ${playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() +
    computerSelection.slice(1)}`;
  const DRAW = "It's a draw!";
  const LOSE = `You lose! ${computerSelection.charAt(0).toUpperCase() +
    computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1)}`;

  if ((playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "scissor" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")) {
    return WIN;
  } else if (playerSelection === computerSelection) {
    return DRAW;
  } else {
    return LOSE;
  }
}


function game() {
  let playerScore = 0
  let computerScore = 0
  let gaming = true

  while (gaming) {
    let playerSelection = prompt();
    let computerSelection = getComputerChoice();

    const WIN = `You win! ${playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + 
      computerSelection.slice(1)}`;
    const DRAW = "It's a draw!";
    const LOSE = `You lose! ${computerSelection.charAt(0).toUpperCase() + 
      computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + 
      playerSelection.slice(1)}`;
    
    let result = playRound(playerSelection, computerSelection);
    if (result == WIN) {
      playerScore++;
      console.log(WIN);
    } else if (result == LOSE) {
      computerScore++;
      console.log(LOSE);
    } else {
      console.log(DRAW);
    }

    if (playerScore === 5) {
      console.log(`You won! Player: ${playerScore}  Computer: ${computerScore}`)
      gaming = false;
    } else if (computerScore === 5) {
      console.log(`You lose! Player: ${playerScore}  Computer: ${computerScore}`)
      gaming = false;
    }
  }
}


