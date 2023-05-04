// Get the img moves from html
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Add click event listeners to the img moves
rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));


// Get a move for the computer
function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];

}

// Play one round of the game
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = outcome(playerSelection, computerSelection);

    updatePlayerMove(playerSelection, computerSelection);

    // Update stats based on the outcome
    if (result == "win") {
        updateStats("win");
    } else if (result == "lose") {
        updateStats("lose");
    } else {
        updateStats("draw");
    }
}


// return the outcome of a round
function outcome(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
        return "win";
    } else if (playerSelection === computerSelection) {
        return "draw";
    } else {
        return "lose";
    }
}

// update html statistics
function updateStats(result) {
    const wins = document.querySelector("#win span");
    const losses = document.querySelector("#lose span");
    const draws = document.querySelector("#draw span");
    const rounds = document.querySelector("#rounds span");

    if (result == "win") {
        wins.textContent = parseInt(wins.textContent) + 1;
    } else if (result == "lose") {
        losses.textContent = parseInt(losses.textContent) + 1;
    } else if (result == "draw") {
        draws.textContent = parseInt(draws.textContent) + 1;
    }

    rounds.textContent = parseInt(rounds.textContent) + 1;
}

// show player move
function updatePlayerMove(playerSelection, computerSelection) {
    const playerMoveImg = document.createElement("img");
    const computerMoveImg = document.createElement("img");
    const playerMove = document.getElementById("player-choice");
    const computerMove = document.getElementById("computer-choice");
  
    // Check if images already exist and remove them if so
    const existingPlayerMoveImg = document.getElementById("player-move");
    if (existingPlayerMoveImg) {
      existingPlayerMoveImg.remove();
    }
  
    const existingComputerMoveImg = document.getElementById("computer-move");
    if (existingComputerMoveImg) {
      existingComputerMoveImg.remove();
    }
  
    playerMoveImg.src = `Images/${playerSelection}.png`;
    playerMoveImg.id = "player-move";
  
    computerMoveImg.src = `Images/${computerSelection}.png`;
    computerMoveImg.id = "computer-move";
  
    playerMove.appendChild(playerMoveImg);
    computerMove.appendChild(computerMoveImg);
}



