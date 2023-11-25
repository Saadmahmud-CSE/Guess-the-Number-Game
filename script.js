let secretNumber = Math.floor(Math.random() * 1000) + 1;
let attempts = 0;

function checkGuess() {
    const userInput = document.getElementById('user-input');
    const feedback = document.getElementById('feedback');
    const attemptCount = document.getElementById('attempt-count');

    const userGuess = parseInt(userInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 1000) {
        feedback.textContent = 'Please enter a valid number between 1 to 1000.';
    } else {
        attempts++;

        if (userGuess === secretNumber) {
            feedback.textContent = `Congratulations! You guessed the correct number: ${secretNumber}`;
            userInput.disabled = true;
        } else if (userGuess < secretNumber) {
            feedback.textContent = 'Too low. Try again!';
        } else {
            feedback.textContent = 'Too high. Try again!';
        }

        attemptCount.textContent = attempts;
    }
}

function restartGame() {
    const userInput = document.getElementById('user-input');
    const feedback = document.getElementById('feedback');
    const attemptCount = document.getElementById('attempt-count');

    secretNumber = Math.floor(Math.random() * 1000) + 1;
    attempts = 0;

    userInput.value = '';
    feedback.textContent = '';
    attemptCount.textContent = '0';
    userInput.disabled = false;
}
