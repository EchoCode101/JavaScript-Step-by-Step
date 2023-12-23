console.log(
  "This is my Javascript Programming 20 - Exercise 2 - Snake, Water, Gun.js"
);


//first iteration

/*function snakeWaterGunGame() {
  let userChoice = prompt("Enter 's' for Snake, 'w' for Water, 'g' for Gun:");
  userChoice = userChoice.toLowerCase();

  if (userChoice !== 's' && userChoice !== 'w' && userChoice !== 'g') {
    alert("Invalid choice! Please choose 's', 'w', or 'g'.");
    return;
  }

  const choices = ['s', 'w', 'g'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  let result;

  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 's' && computerChoice === 'w') ||
    (userChoice === 'w' && computerChoice === 'g') ||
    (userChoice === 'g' && computerChoice === 's')
  ) {
    result = "Congratulations! You win!";
  } else {
    result = "You lose! Better luck next time!";
  }

  alert(`Your choice: ${userChoice}\nComputer's choice: ${computerChoice}\n${result}`);
}

snakeWaterGunGame();
*/













//2nd itteration
/*
function snakeWaterGunGame() {
  let rounds = parseInt(prompt("Enter the number of rounds:"));

  if (isNaN(rounds) || rounds <= 0) {
    alert("Please enter a valid number of rounds.");
    return;
  }

  let playerWins = 0;
  let computerWins = 0;

  while (rounds > 0) {
    let userChoice = prompt("Enter 's' for Snake, 'w' for Water, 'g' for Gun:");
    userChoice = userChoice.toLowerCase();

    if (userChoice !== "s" && userChoice !== "w" && userChoice !== "g") {
      alert("Invalid choice! Please choose 's', 'w', or 'g'.");
      continue;
    }

    const choices = ["s", "w", "g"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    let result;

    if (userChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (userChoice === "s" && computerChoice === "w") ||
      (userChoice === "w" && computerChoice === "g") ||
      (userChoice === "g" && computerChoice === "s")
    ) {
      result = "Congratulations! You win!";
      playerWins++;
    } else {
      result = "You lose! Better luck next time!";
      computerWins++;
    }

    rounds--;
    alert(
      `Your choice: ${userChoice}\nComputer's choice: ${computerChoice}\n${result}\nRounds left: ${rounds}`
    );
  }

  let gameResult;

  if (playerWins > computerWins) {
    gameResult = "Congratulations! You win the game!";
  } else if (computerWins > playerWins) {
    gameResult = "Computer wins the game!";
  } else {
    gameResult = "It's a tie game!";
  }

  alert(
    `Game Over!\n${gameResult}\nPlayer wins: ${playerWins}\nComputer wins: ${computerWins}`
  );
}

snakeWaterGunGame();


*/
//3rd Itteration


function snakeWaterGunGame() {
  let playAgain = "y";

  while (playAgain.toLowerCase() === "y") {
    let rounds = parseInt(prompt("Enter the number of rounds:"));

    if (isNaN(rounds) || rounds <= 0) {
      alert("Please enter a valid number of rounds.");
      return;
    }

    let playerWins = 0;
    let computerWins = 0;

    while (rounds > 0) {
      let userChoice = prompt(
        "Enter 's' for Snake, 'w' for Water, 'g' for Gun:"
      );
      userChoice = userChoice.toLowerCase();

      if (userChoice !== "s" && userChoice !== "w" && userChoice !== "g") {
        alert("Invalid choice! Please choose 's', 'w', or 'g'.");
        continue;
      }

      const choices = ["s", "w", "g"];
      const randomIndex = Math.floor(Math.random() * choices.length);
      const computerChoice = choices[randomIndex];

      let result;

      if (userChoice === computerChoice) {
        result = "It's a tie!";
      } else if (
        (userChoice === "s" && computerChoice === "w") ||
        (userChoice === "w" && computerChoice === "g") ||
        (userChoice === "g" && computerChoice === "s")
      ) {
        result = "Congratulations! You win!";
        playerWins++;
      } else {
        result = "You lose! Better luck next time!";
        computerWins++;
      }

      rounds--;
      alert(
        `Your choice: ${userChoice}\nComputer's choice: ${computerChoice}\n${result}\nRounds left: ${rounds}`
      );
    }

    let gameResult;

    if (playerWins > computerWins) {
      gameResult = "Congratulations! You win the game!";
    } else if (computerWins > playerWins) {
      gameResult = "Computer wins the game!";
    } else {
      gameResult = "It's a tie game!";
    }

    playAgain = prompt(
      `Game Over!\n${gameResult}\nPlayer wins: ${playerWins}\nComputer wins: ${computerWins}\nDo you want to play again? (y/n)`
    );

    if (playAgain.toLowerCase() !== "y" && playAgain.toLowerCase() !== "n") {
      alert("Invalid input! Exiting game.");
      playAgain = "n";
    }
  }
}

snakeWaterGunGame();
