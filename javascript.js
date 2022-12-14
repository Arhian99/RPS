//variable initializations (part of functional code)
let choices = ['rock', 'paper', 'scissors']
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
document.getElementById('userScore').innerText = `${playerScore}`; // plugs in player score to scoreboard
document.getElementById('compScore').innerText = `${computerScore}`; //plugs in player score to scoreboard
let tiedRound;
let userWins;
let playOne;

//Picking 1 Round vs 5 Round Games (not done)
const oneRound = document.getElementById('oneRound');
const fiveRounds = document.getElementById('fiveRounds');

oneRound.addEventListener('click', () => {playOne = true});
fiveRounds.addEventListener('click', () => {playOne = false; playerScore = 0; computerScore = 0;});



// Animations/ Style code
// RPS button animations
const buttons = document.getElementsByClassName('button');

for (let button of buttons) {
    button.addEventListener('mouseover', () => button.className = 'button-interact-up');
    button.addEventListener('mouseover', () => button.id = `${button.id}-interact`);
    button.addEventListener('mouseleave', () => button.className = 'button');
    button.addEventListener('mouseleave', () => button.id = `${button.id}`.slice(0, -9));
    button.addEventListener('mousedown', () => button.className = 'button-interact-down');
};

//Start popup banner
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
}; // adds event listener to the one round and five round buttons at the beginning which closes beginning popup upon click

// Winner announcement popup
const popupWinner = document.getElementById('popup-winner-cont');
const ok = document.getElementById('ok');
function oneVfive() {
    if (playOne === true) {    
        document.getElementById('popup-winner-cont').style.display = 'none';
        document.getElementById('popup-end-cont').style.display = 'block';
    }

    else if (playOne === false) {
        if (playerScore < 3 && computerScore < 3) {
            document.getElementById('popup-winner-cont').style.display = 'none';
        }

        else if (playerScore == 3 || computerScore == 3) {
            document.getElementById('popup-winner-cont').style.display = 'none';
            document.getElementById('popup-gamewinner-cont').style.display = 'block';
            // check the winner, display the game winner popup // game winner popup ok button triggers the play again popup
            if (playerScore > computerScore) {
                document.getElementById('game-winner').innerHTML = 'You Win the Game !!!';
                document.getElementById('game-outcome').innerHTML = `Final Score: Computer - ${computerScore} vs Player - ${playerScore}`;
            }

            else if (computerScore > playerScore) {
                document.getElementById('game-winner').innerHTML = 'You Loose the Game :(';
                document.getElementById('game-outcome').innerHTML = `Final Score: Computer - ${computerScore} vs Player - ${playerScore}`;
            }
        }

    }
};

ok.addEventListener('click', oneVfive);

//game winner (5 rounds) announcement popup
const gameWinnerOk = document.getElementById('gamewinner-ok');
gameWinnerOk.addEventListener('click', () => {
    document.getElementById('popup-gamewinner-cont').style.display = 'none';
    document.getElementById('popup-end-cont').style.display = 'block';
});

// end 'Play Again' Popup
const oneRoundPA = document.getElementById('oneRound-pa');
const fiveRoundsPA = document.getElementById('fiveRounds-pa');

oneRoundPA.addEventListener('click', () => {playOne = true; document.getElementById('popup-end-cont').style.display = 'none'});
fiveRoundsPA.addEventListener('click', () => {playOne = false; playerScore = 0; computerScore = 0; document.getElementById('popup-end-cont').style.display = 'none'});



//if (playOne == true) {ok.addEventListener('click', () => {document.getElementById('popup-winner-cont').style.display = 'none'; document.getElementById('popup-end-cont').style.display = 'block'});}
// the line of code above brings up the Play again popup banner upon closing the winner announcement banner in ONE round games
//the line of code above closes the winner announcement popup banner after each round on FIVE round games only // if (playOne == false) {ok.addEventListener('click', () => {document.getElementById('popup-winner-cont').style.display = 'none'})};


// this is the functional code


// Game engine
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function getComputerChoice() {
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
};

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

    document.getElementById('userScore').innerText = `${playerScore}`;
    document.getElementById('compScore').innerText = `${computerScore}`;
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

function caps2(string) {
    let letter1 = string.charAt(0);
    letter1 = letter1.toUpperCase();
    let rest = string.slice(1, string.length);
    rest = rest.toLowerCase();
    return letter1 + rest;
}; // this function takes the first letter of a string and capitalizes it, used to capitalize the returned strings

window.addEventListener('load', rpsPressed);




//score reset feature
const scoreReset = document.getElementById('scoreReset');
scoreReset.addEventListener('change', (event) => {if (event.target.checked) {playerScore = 0; computerScore = 0; document.getElementById('userScore').innerText = `${playerScore}`; document.getElementById('compScore').innerText = `${computerScore}`;}})


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

