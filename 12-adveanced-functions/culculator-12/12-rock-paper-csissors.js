let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

console.log(score);

let isAutoPlaing = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaing) {
    intervalId = setInterval( function () {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    },1000)
    isAutoPlaing = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
  
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "you lose";
    } else if (computerMove === "paper") {
      result = "you win";
    } else {
      result = "tie";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "you win";
    } else if (computerMove === "paper") {
      result = "tie";
    } else {
      result = "you lose";
    }
  }
  computerMove === "rock"
    ? (result = "tie")
    : computerMove === "paper"
    ? (result = "you lose")
    : (result = "you win");

  if (result === "you win") {
    score.wins += 1;
  } else if (result === "you lose") {
    score.losses += 1;
  } else score.ties += 1;

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = `${result}`;
  document.querySelector(
    ".js-moves"
  ).innerHTML = ` you
<img src="images/${playerMove}-emoji.png" class="move-icon" alt="">
<img src="images/${computerMove}-emoji.png" class="move-icon" alt="">
computer`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
}

function pickComputerMove() {
  const randomNum = Math.random();

  let computerMove = "";

  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}