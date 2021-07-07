let playGame = confirm('Let´s play Rock, Paper, Scissors!');
if (playGame) {
    let playerSelection = prompt('please choose rock, paper or scissors');
} else {
    alert('ok, maybe later...');
}

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}

function playRound (playerSelection, computerSelection) {

}

let playerSelection = 'rock';
let computerSelection = computerPlay();
console.log(playRound (playerSelection, computerSelection));
