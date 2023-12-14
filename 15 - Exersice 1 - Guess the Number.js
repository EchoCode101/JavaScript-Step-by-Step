console.log(
  "This is my Javascript Programming 15 - Exersice 1 - Guess the Number.js"
);

function guessNumber() {
  const originalNumber = Math.floor(Math.random() * 101); // Generate random number between 0 and 100
  let numberOfGuesses = 0;

  while (true) {
    const userGuess = parseInt(prompt("Guess the number (between 0 and 100):"));

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
      alert("Please enter a valid number between 0 and 100!");
      continue;
    }

    numberOfGuesses++;

    if (userGuess === originalNumber) {
      const score = 100 - numberOfGuesses;
      alert(
        `Congratulations! You guessed the correct number in ${numberOfGuesses} attempts. Your score is ${score}.`
      );
      break;
    } else if (userGuess < originalNumber) {
      alert("The number is greater.");
    } else {
      alert("The number is lesser.");
    }
  }
}

guessNumber();
