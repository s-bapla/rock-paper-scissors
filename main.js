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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        console.log(
          `player choice: ${playerSelection}, computer choice: ${computerSelection}, tie`
        );
        return "tie";
      case "paper":
        console.log(
          `player choice: ${playerSelection}, computer choice: ${computerSelection}, lose`
        );
        return "lose";
      case "scissors":
        console.log(
          `player choice: ${playerSelection}, computer choice: ${computerSelection}, win`
        );
        return "win";
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        console.log(
          `player choice: ${playerSelection}, computer choice: ${computerSelection}, win`
        );
        return "win";
      case "paper":
        console.log(
          `player choice: ${playerSelection}, computer choice: ${computerSelection}, tie`
        );
        return "tie";
      case "scissors":
        console.log(
          `player choice: ${playerSelection}, computer choice: ${computerSelection}, lose`
        );
        return "lose";
    }
  } else {
    switch (computerSelection) {
      case "rock":
        console.log(
          `player choice: ${playerSelection}, computer choice: ${computerSelection}, lose`
        );
        return "lose";
      case "paper":
        console.log(
          `player choice: ${playerSelection}, computer choice: ${computerSelection}, win`
        );
        return "win";
      case "scissors":
        console.log(
          `player choice: ${playerSelection}, computer choice: ${computerSelection}, tie`
        );
        return "tie";
    }
  }
}

function playGame() {
  let compScore = 0;
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("choose rock paper or scissors: ");
    const computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);

    switch (result) {
      case "win":
        playerScore += 1;
        break;
      case "lose":
        compScore += 1;
        break;
      case "tie":
        playerScore += 1;
        compScore += 1;
        break;
    }
  }
  if (playerScore > compScore) {
    console.log(
      `You win. your score: ${playerScore} computer score: ${compScore}`
    );
    return `You win. your score: ${playerScore} computer score: ${compScore}`;
  } else if (compScore > playerScore) {
    console.log(
      `You lose. your score: ${playerScore} computer score: ${compScore}`
    );
    return `You lose. your score: ${playerScore} computer score: ${compScore}`;
  } else {
    console.log(
      `Tie. your score: ${playerScore} computer score: ${compScore}`
    );
    return `Tie. your score: ${playerScore} computer score: ${compScore}`;
  }
}
