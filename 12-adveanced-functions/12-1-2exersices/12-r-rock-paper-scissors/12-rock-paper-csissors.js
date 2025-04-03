let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

console.log(score);

let isAutoPlaying = false;
let intervalId;

const buttonAutoPlayingEl = document.querySelector('.js-auto-play-button');
buttonAutoPlayingEl.addEventListener('click',autoPlay);
document.body.addEventListener('keydown',(event) => {if (event.key === 'a') autoPlay()})
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
      isAutoPlaying = true;
      buttonAutoPlayingEl.innerHTML = 'Stop playing'
    },1000)
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    buttonAutoPlayingEl.innerHTML = 'Auto Play'
  }
  
}

document.querySelector('.js-rock-button')
.addEventListener('click',() => playGame('rock'))

document.querySelector('.js-paper-button')
.addEventListener('click',() => playGame("paper"))

document.querySelector('.js-scissors-button')
.addEventListener('click',() => playGame("scissors"))


document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r') {
    playGame('rock')
  } else if (event.key === 'p') {
    playGame('paper') 
  } else if (event.key === 's') {
    playGame('scissors') 
  }
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace'){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
  }});  



document.querySelector('.js-reset-button').addEventListener('click',() => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
  })


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
  } else if (playerMove === "rock") {
    if (computerMove === "scissors") {
      result = "you win";
    } else if (computerMove === "rock") {
      result = "tie";
    } else {
      result = "you lose";
    }
  };
    
  
 

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