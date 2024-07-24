/*-------------------------------- Variables --------------------------------*/


let computerChoice
const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','S','Q','W','R','T','Y','U','I','O','P','Z','X','V','M','N']



/*------------------------ Cached Element References ------------------------*/
let playerChoice 
const input = document.querySelector('.text')
const chances = document.querySelector('.chances')
const reset = document.querySelector('.resetbtn')
const display = document.querySelector('.display')
const check = document.querySelector(".check")

/*-------------------------------- Functions --------------------------------*/
const play = () => {
     playerChoice = input.value.toUpperCase();
    console.log(playerChoice);
    getComputerChoice()
    compare()
  }

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * letters.length);
    computerChoice = letters[randomIndex];
  };

  const compare = () => {
    if (playerChoice === computerChoice) {
      display.textContent = 'You Won!';
    } else {
      display.textContent = 'Try again!';
    }}

/*----------------------------- Event Listeners -----------------------------*/

check.addEventListener('click', play);