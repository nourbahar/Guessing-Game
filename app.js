/*-------------------------------- Variables --------------------------------*/

let playerChoice 
let computerChoice
const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','S','Q','W','R','T','Y','U','I','O','P','Z','X','V','M','N']
let chances=5


/*------------------------ Cached Element References ------------------------*/

const input = document.querySelector('.text')
const chance = document.querySelector('.chances')
const reset = document.querySelector('.resetbtn')
const display = document.querySelector('.display')
const check = document.querySelector(".check")

/*-------------------------------- Functions --------------------------------*/



const play = () => {
     playerChoice = input.value.toUpperCase();
    //console.log(playerChoice);
    compare()
  }

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * letters.length);
    computerChoice = letters[randomIndex];
    console.log(computerChoice)
    
  };

  const compare = () => {
    if (playerChoice === computerChoice) {
      display.textContent = 'You Won!';
      setTimeout(init, 2000); 

    } 
    
    else {
      display.textContent = 'Try again!';
        chances--;
        chance.textContent= chances
      }

      if (chances === 0) {
        display.textContent = 'Sorry, you lost.';
        setTimeout(init, 2000);
      }
    };

    const init = () => {
      display.textContent = '';
      chance.textContent = '5';
      chances = 5;
      input.value = '';
      getComputerChoice();
    };

    getComputerChoice();

/*----------------------------- Event Listeners -----------------------------*/

   check.addEventListener('click', play);
   reset.addEventListener('click',init)
