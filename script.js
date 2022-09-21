'use strict';
let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//created function for display message for easy use
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number⛔!';
    displayMessage('No Number⛔!');

    //when payer wins game
  } else if (guess === secreteNumber) {
    document.querySelector('.message').textContent = '✅ Correct Number!';
    document.querySelector('.number').textContent = secreteNumber;

    document.querySelector('body').style.backgroundColor = '#4169E1';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secreteNumber ? '🆙Too High!' : '📉Too Low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😒You lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //     //when guess too high
  //   } else if (guess > secreteNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '🆙Too High!';
  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😒You lost the Game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     //when guess is too low
  //   } else if (guess < secreteNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉Too Low!';
  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😒You lost the Game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing..';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
