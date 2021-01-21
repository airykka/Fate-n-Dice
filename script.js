'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  dice.classList.add('hidden');
};

init();

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;

const switchPlayer = function () {
  //resetting the temp current score to 0 and displaying it when the player rolls a 1
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //switching the players
  activePlayer = activePlayer === 0 ? 1 : 0;
  //switching classes to visually show the current player.
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// Adding functionality to the Roll button
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate random dice number between 1 and 6
    const diceRoll = Math.trunc(Math.random() * 6) + 1;

    //2. Display the corresponding dice image that matches the number that was rolled.
    dice.classList.remove('hidden');
    dice.src = `images/dice-${diceRoll}.png`;

    //3. Check if its a 1 so you can switch players, else add it to the current score.
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // //resetting the temp current score to 0 and displaying it when the player rolls a 1
      // currentScore = 0;
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // //switching the players
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // //switching classes to visually show the current player.
      // player0.classList.toggle('player--active');
      // player1.classList.toggle('player--active');
      switchPlayer();
    }
  }
});

//Adding functionality to the Hold button
btnHold.addEventListener('click', function () {
  if (playing) {
    //Calculate the score of the current player
    scores[activePlayer] += currentScore;
    //Display the score on the DOM
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Switch Player if the total score of the current player is less than 100 else the current player wins.
    if (scores[activePlayer] >= 100) {
      //When active player has reached 100, we need to:
      //1. Declare him winner (assign him the winner class so we can visually see it)
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      //2. Remove the active player class from the active player to prevent css issues
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      //3. Stop all the buttons specifically the (hold button and the roll button). Only the new game button will work.
      playing = false;
      //4. Hide the dice
      dice.classList.add('hidden');
    } else {
      //When active player holds score and doesn't have up to 100 points
      switchPlayer();
    }
  }
});

//Adding functionality to the New game button - Resetting the game
btnNew.addEventListener('click', function () {
  init();
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 0;
  player0.classList.add('player--active'); //In practice, you should check if this element contains the class before adding or removing it.
  player1.classList.remove('player--active');
  playing = true;
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  //1. Remove the player winner class
  //2. Make Player 1 the active player
  //3. Clear all current scores and player scores
  //4. Make the hold and roll button work again
});
