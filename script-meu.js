let playGame = confirm('Vamos Jogar Pedra, Papel e Tesoura!');
let playerScore = 0;
let computerScore = 0;


// como o computador vai jogar
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
}

//jogar uma rodada
function playRound (playerSelection, computerSelection) {
  let playerChoice = prompt('rock, paper or scissors?')
  let playerSelection = playerChoice.trim().toLowerCase();
  let computerSelection = computerPlay();  

  if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')) {
      
      result = ('you win!');


  }
  
}









/*
if (playGame) {
  //play
    let playerSelection = prompt('please choose rock, paper or scissors');
    if (playerChoice){
        let playerSelection = playerChoice.trim().toLowerCase();
        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
            let computerSelection = computerPlay();
        } else {
          alert ('precisa colocar pedra, papel ou tesoura.');          
        }
    }
} else {
    alert('ok, maybe later...');
}*/