"use strict";

/** guessingGame
 *
 * Generate a random number 0-99
 * store that number privately
 *      use a closure to keep it secret
 * declare the private variable - winningNumber - in the outer fn
 * logic for the game will live in the inner function
 * compare guessed number to winningNumber
 */

function guessingGame(guessNumber) {
  let winningNumber = Math.floor(Math.random() * 100);
  let count = 0;
  let hasWon = false;
  return function game(guessNumber) {
    count += 1;
    if (hasWon) {
      return "The game is over, you already won!";
    }
    if (winningNumber === guessNumber) {
      hasWon = true;
      return `You win! You found ${winningNumber} in ${count} guesses.`;
    }
    if (winningNumber > guessNumber) {
      return `${guessNumber} is too low!`;
    }
    if (winningNumber < guessNumber) {
      return `${guessNumber} is too high!`;
    }
  }
}
module.exports = { guessingGame };
/**let game = guessingGame();
game(50); // "50 is too low!"
game(90); // "90 is too high!"
game(70); // "You win! You found 70 in 3 guesses."
game(70); // "The game is over, you already won!" */
