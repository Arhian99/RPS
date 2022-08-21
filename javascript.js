

let choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

console.log(getComputerChoice());