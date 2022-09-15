// Rock, Paper Scissors buttons and animations
const buttons = document.getElementsByClassName('button');

for (let button of buttons) {
    button.addEventListener('mouseover', () => button.className = 'button-interact-up');
    button.addEventListener('mouseover', () => button.id = `${button.id}-interact`);
    button.addEventListener('mouseleave', () => button.className = 'button');
    button.addEventListener('mouseleave', () => button.id = `${button.id}`.slice(0, -9));
    button.addEventListener('mousedown', () => button.className = 'button-interact-down');
};

//Pop Up Code
const popup = document.getElementById('popup-cont');

function showPopup() {
    popup.style.display = 'block';
};

function hidePopup() {
    popup.style.display = 'none';
};

window.addEventListener('load', () => setTimeout(showPopup, 1000));

const popupButtons = document.querySelectorAll('#buttons-container');
for (let popupButton of popupButtons) {
    popupButton.addEventListener('click', hidePopup);
};

const ok = document.getElementById('ok');
ok.addEventListener('click', () => document.getElementById('popup-winner-cont').style.display = 'none');


// this is the functional code

let choices = ['rock', 'paper', 'scissors']
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let tiedRound;
let userWins;
let playOne = true;
const popupWinner = document.getElementById('popup-winner-cont');



function getComputerChoice() {
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
};

//Plugging in RPS buttons to Player Selection and 1 Round Games
const oneRound = document.getElementById('oneRound');
const fiveRounds = document.getElementById('fiveRounds');

oneRound.addEventListener('click', () => playOne = true);
fiveRounds.addEventListener('click', () => playOne = false);


const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

window.addEventListener('load', rpsPressed);

function rpsPressed() {
    rock.addEventListener('click', () => {
        playerSelection = 'rock';
        getComputerChoice();
        checkWinner(playerSelection, computerSelection);}
    );
    
    paper.addEventListener('click', () => {
        playerSelection = 'paper';
        getComputerChoice();
        checkWinner(playerSelection, computerSelection);}
    );

    scissors.addEventListener('click', () => {
        playerSelection = 'scissors';
        getComputerChoice();
        checkWinner(playerSelection, computerSelection);}
    );
};


//checking whether the reset score checkbox is checked and setting the value of resetScore variable t/f accordingly
const scoreCheckbox = document.getElementsByClassName('popup-end').getElementsByTagName('input[name=scoreCheckbox]');
scoreCheckbox.addEventListener('change', (event) => {if (event.target.checked) {let resetScore = true} else {resetScore = false}})


function caps2(string) {
    let letter1 = string.charAt(0);
    letter1 = letter1.toUpperCase();
    let rest = string.slice(1, string.length);
    rest = rest.toLowerCase();
    return letter1 + rest;
} // this function takes the first letter of a string and capitalizes it, used to capitalize the returned strings




function checkWinner(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        tiedRound = true;
        userWins = false;
        alertWinner();        
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        tiedRound = false;
        userWins = false;
        alertWinner();        
    }

    else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        tiedRound = false;
        userWins = true;
        alertWinner();        
    }
};

function alertWinner() {
    if (tiedRound === true && userWins === false) {
        popupWinner.style.display = 'block';
        document.getElementById('winner').innerHTML = 'Tie!';
        document.getElementById('outcome').innerHTML = 'Play Again!';
    }

    else if (userWins == false && tiedRound === false) {
        popupWinner.style.display = 'block';
        document.getElementById('winner').innerHTML = 'You Loose this Round :(';
        document.getElementById('outcome').innerHTML = `${caps2(computerSelection)} beats ${caps2(playerSelection)}`;
    }

    else if (userWins == true && tiedRound === false) {
        popupWinner.style.display = 'block';
        document.getElementById('winner').innerHTML = 'You Win this Round!!!';
        document.getElementById('outcome').innerHTML = `${caps2(playerSelection)} beats ${caps2(computerSelection)}`;
    }
};

/*
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
} */

