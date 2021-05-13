'use strict';

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let rng = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No number !';
    displayMessage('🚫 No number !');
    //When player wins
  } else if (guess === rng) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = rng;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== rng) {
    if (score > 1) {
      displayMessage(guess > rng ? '📈 Too high!' : '📉 too low!');
      guess > rng ? 'Too high!' : 'too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');

      document.querySelector('body').style.backgroundColor = '#f53333';
      document.querySelector('.number').textContent = rng;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.score').textContent = 0;
    }
  }
  //When guess is too High
  // } else if (guess > rng) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('body').style.backgroundColor = '#f53333';
  //     document.querySelector('.number').textContent = rng;
  //     document.querySelector('.number').style.width = '30rem';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //when guess is too low
  // } else if (guess < rng) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('body').style.backgroundColor = '#f53333';
  //     document.querySelector('.number').textContent = rng;
  //     document.querySelector('.number').style.width = '30rem';
  //     document.querySelector('.score').textContent = 0;
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  rng = Math.trunc(Math.random() * 20) + 1;
  const guess = (document.querySelector('.guess').value = '');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
