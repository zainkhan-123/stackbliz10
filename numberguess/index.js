let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessnumber');
const guessSlot = document.querySelector('.guesses');
const remaing = document.querySelector('.lastresult');
const lowOrhi = document.querySelector('.lowOrhi');
const startover = document.querySelector('.resultparas');

const p = document.createElement('p');
let prevGuess = [];
let numguess = 1;
let playgame = true;
if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('plz enter a valid number');
  } else if (guess < 1) {
    alert('plz enter a  number more than 1 ');
  } else if (guess > 100) {
    alert('plz enter a  number less than 100 ');
  } else {
    prevGuess.push(guess);
    if (numguess === 11) {
      displayGuess(guess);
      displayMessage(`game  over . Random number was ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
      displayGuess(guess);
      displayMessage(message);
    }
  }

  //ya function only check kary ga hy kahli user ny a,b,c tu nhi di ore mene range 1 to 100 rakhe hy  khai user ny 500 tu nhi di value
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`number  is  too low`);
  } else if (guess > randomNumber) {
    displayMessage(`number  is  too high`);
  }

  // ya method check kary ga k value equal tu nhi hy random number k aghr equal h tu display method k through batye ga k ap game jeet gaye ho
}
function displayGuess(guess) {
  userinput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  numguess++;
  remaing.innerHTML = `${11 - numguess}`;

  //ya massge ko clean kary ga ore remaining guess ko bhi update kary ga
}
function displayMessage(message) {
  lowOrhi.innerHTML = `<h2>${message}</h2>`;

  //es my hum massge  pass kary gaye ore wahi massge as it is print hoga
}

function endGame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newgame'> start new game </h2>`;
  startover.appendChild(p);
  playgame = false;
  newGame();

  // ya game ko end kary ga ya method
}
function newGame() {
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numguess = 1;
    guessSlot.innerHTML = '';
    remaing.innerHTML = `${11 - numguess}`;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);
    lowOrhi.innerHTML = '';
    playgame = true;
  });

  // ya method game ko start kary ga
}
/////////////////////////////////////////////////////////////////////////////////

// let randomNumber = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert('PLease enter a valid number');
//   } else if (guess < 1) {
//     alert('PLease enter a number more than 1');
//   } else if (guess > 100) {
//     alert('PLease enter a  number less than 100');
//   } else {
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over. Random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage(`You guessed it right`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is TOOO low`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is TOOO High`);
//   }
// }

// function displayGuess(guess) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess} `;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }

// function newGame() {
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);

//     playGame = true;
//   });
// }
