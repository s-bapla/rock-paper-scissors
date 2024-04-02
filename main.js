const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
scissors.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));

function getComputerChoice() {
  let rand_int = Math.floor(Math.random() * 3);
  switch (rand_int) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
let compScore = 0;
let playerScore = 0;
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const div = document.querySelector(".results");
  const h1 = document.querySelector(".score");

  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        div.textContent = `player choice: ${playerSelection}, computer choice: ${computerSelection}, tie`;
        compScore += 1;
        playerScore += 1;
        break;
      case "paper":
        div.textContent = `player choice: ${playerSelection}, computer choice: ${computerSelection}, lose`;
        compScore += 1;
        break;
      case "scissors":
        div.textContent = `player choice: ${playerSelection}, computer choice: ${computerSelection}, win`;
        playerScore += 1;
        break;
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        div.textContent = `player choice: ${playerSelection}, computer choice: ${computerSelection}, win`;
        playerScore += 1;
        break;
      case "paper":
        div.textContent = `player choice: ${playerSelection}, computer choice: ${computerSelection}, tie`;
        compScore += 1;
        playerScore += 1;
        break;
      case "scissors":
        div.textContent = `player choice: ${playerSelection}, computer choice: ${computerSelection}, lose`;
        compScore += 1;
        break;
    }
  } else {
    switch (computerSelection) {
      case "rock":
        div.textContent = `player choice: ${playerSelection}, computer choice: ${computerSelection}, lose`;
        compScore += 1;
        break;
      case "paper":
        div.textContent = `player choice: ${playerSelection}, computer choice: ${computerSelection}, win`;
        playerScore += 1;
        break;
      case "scissors":
        div.textContent = `player choice: ${playerSelection}, computer choice: ${computerSelection}, tie`;
        compScore += 1;
        playerScore += 1;
        break;
    }
  }

  h1.textContent = `computer: ${compScore} - player: ${playerScore}`;
  
  if (playerScore === 5 || compScore === 5) {
    if (playerScore > compScore) {
      h1.textContent = `You win. your score: ${playerScore} computer score: ${compScore}`;
    } else if (compScore > playerScore) {
      h1.textContent = `You lose. your score: ${playerScore} computer score: ${compScore}`;
    } else {
      h1.textContent = `Tie. your score: ${playerScore} computer score: ${compScore}`;
    }
    playerScore = 0;
    compScore = 0;
  }
}
