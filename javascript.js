let choices = ['rock', 'paper', 'scissors']
let computerSelection

function getComputerChoice() {
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

// must implement a way to choose/ decide playerSelection

function caps2(string) {
    let letter1 = string.charAt(0);
    letter1 = letter1.toUpperCase();
    let rest = string.slice(1, string.length);
    rest = rest.toLowerCase();
    return letter1 + rest;
} // this function takes the first letter of a string and capitalizes it, used to capitalize the returned strings

let playerScore = 0;
let computerScore = 0;
let playerSelection = prompt('Rock, Paper, Scissors?');
let tiedRound;

function checkWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        tiedRound = true;
        return 'Tie!, Play Again!';
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        tiedRound = false;
        return `You Loose this Round! ${caps2(computerSelection)} beats ${caps2(playerSelection)}`;
    }

    else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        tiedRound = false;
        return `You Win this Round! ${caps2(playerSelection)} beats ${caps2(computerSelection)}`;
    }
}


function game() {
    for (let i=0; i < 5; i++) {
        computerSelection = getComputerChoice();
        console.log(checkWinner(playerSelection, computerSelection));
        if (tiedRound === true) {i--}
        if (playerScore === 3 || computerScore === 3) {
            break;
        }
        console.log(`Player: ${playerScore} vs Computer: ${computerScore}`)
    }

    if (playerScore > computerScore) {
        console.log(`You Win the Game!!! Final Score: Player - ${playerScore} vs Computer - ${computerScore}`);
    }

    else if (computerScore > playerScore) {
        console.log(`You Loose the Game!!! Final Score: Player: ${playerScore} vs Computer: ${computerScore}`);
    }

   
} 

console.log(game());

