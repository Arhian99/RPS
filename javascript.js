

let choices = ['rock', 'paper', 'scissors']
let computerSelection

function getComputerChoice() {
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

// must implement a way to choose/ decide playerSelection
computerSelection = getComputerChoice();

function checkWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return 'Tie!, Play Again!'
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You Loose! ${caps2(computerSelection)} beats ${caps2(playerSelection)}`
    }

    else {
        return `You Win! ${caps2(playerSelection)} beats ${caps2(computerSelection)}`
    }    
}

function caps2(string) {
    let letter1 = string.charAt(0);
    letter1 = letter1.toUpperCase();
    let rest = string.slice(1, string.length);
    rest = rest.toLowerCase();
    return letter1 + rest;
}