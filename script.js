let randNum = parseInt(Math.random() * 100 + 1);
// console.log(randNum);
const submit = document.querySelector("#sub");
const userInput = document.querySelector("#guess-input");
const guesses = document.querySelector(".Guesses");
const last_result = document.querySelector(".lastResult");
const lowOrhi = document.querySelector(".lowOrHi");
const reset = document.querySelector(".guess-count");

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;
    if (playGame) {
        submit.addEventListener('click', function (e) {
        e.preventDefault;
        const guess = parseInt(userInput.value);
        validateGuess(guess);

    });
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('pls enter a valid number')
    } else if (guess < 1) {
        alert('pls enter a number more than 1');
    } else if (guess > 100) {
        alert('pls enter a number less than 100');
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            remainingGuess(guess);
            displayMessage(`Game Over, the number was ${randNum}`);
            endGame();
        }
        else {
            remainingGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {
    if (guess === randNum) {
        displayMessage(`You guessed it right, in ${prevGuess.length} guesses`);
        endGame();
    } else if (guess < randNum) {
        displayMessage(`Too low`);
    } else {
        displayMessage(`Too high`);
    }
}
function remainingGuess(guess) {
    userInput.value = '';
    guesses.innerHTML += `${guess} , `;
    numGuess++;
    last_result.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
    lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML = `<h2 id = 'newGame'> START a new game </h2>`;
    reset.appendChild(p);
    playGame = false;
    newGame();
}
function newGame() {
    const newGameBtn = document.querySelector('#newGame');
    
    newGameBtn.addEventListener('click', function (e) {
        randNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guesses.innerHTML = '';
        lowOrhi.innerHTML = '';
        last_result.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        reset.removeChild(p);
        playGame = true;
    });
}
