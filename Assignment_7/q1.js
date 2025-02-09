const randomNumber = Math.floor(Math.random() * 100) + 1;
let guess = null;
while (guess !== randomNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"), 10);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else if (guess < randomNumber) {
        alert("Too low! Try again.");
    } else if (guess > randomNumber) {
        alert("Too high! Try again.");
    } else {
        alert("Congratulations! You guessed the correct number: " + randomNumber);
    }
}
