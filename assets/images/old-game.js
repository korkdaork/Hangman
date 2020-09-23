// Create geusses ul
result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
        } else {
            guess.innerHTML = "_";
        }

        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }
}

// Show lives
comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
        showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
            showLives.innerHTML = "You Win!";
        }
    }
}










// //Sections/Steps of codes for Game
// //1. Random Words
// //2. Word Selection
// //3. Key functions (on keyup.etc)
// //4. Guessing the letter/current guess and guess remaining
// //5. Letters already guessed
// //6. End Conditions (win/lose)
// //7. Display the number of wins

// //Variables
// var words = ["Roxalani", "Alani", "Alans", "Scythians", "Romans", "Macedonians", "Athenians", "Spartans", "Carthigians", "Sarmatians", "Dacians"];
// var word = words[Math.floor(Math.random() * words.length)];

// //var of to start game with 0 wins
// var wins = 0;

// //var to hold the index of current word
// var wordIndex = 0;

// //remaining guess var
// //var

// //Vars w/ references
// var wordSelectedElement = document.getElementById("selected-word");
// var winsElement = document.getElementById("wins");
// var userGuessElement = document.getElementById("user-guess");
// var guessedLettersElement = document.getElementById("guessed-letters")
// var remainingGuessElement = document.getElementById("remaining-guesses");


// //need to identify what user can choose - letter wise and add in toLowerCase().charAt()
// var validGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// //Start Game, Reset Game, Win, Lose Variables
// var pressAnyKeyToStart = ["Press Any Key to Start"];
// var pressAnyKeyToReset = ["Press Any Key to Reset"];
// var youWin = ["You Win"];
// var youLose = ["You Lose"];

// var remainingLetters = word.length;
// var answerArray = [];

// //Rendering the word function
// function renderWord() {
//     if (wordIndex <= (words.lenght - 1)) {
//         document.querySelector("#selected-word").innerHTML = words[wordIndex].answerArray;
//     }
//     else {
//         document.querySelector("#selected-word").innerHTML = "There are no more words to guess!";
//         document.querySelector("#wins").innerHTML = "Wins: " + wins;
//     }
// };

// //Function to update the wins.
// function updateWins() {
//     document.querySelector("#wins").innerHTML = "Wins: " + wins;
// };

// //MAIN GAME START

// //Starting game functions
// renderWord();
// updateWins();

// //game variable

// var game = Hangman();

// //function for onkeyup to start game
// document.onkeyup = function (event) {
//     var userGuess = event.key.toLowerCase();

//     if (validGuess.includes(userGuess) && !game.guessedLetters) {
//         game.checkGuess(userGuess);

//     } else {
//         game.updatePageData();

//         //Determines what  which key was pressed and makes it lowercase
//         var userGuess = event.key.toLowerCase();
//     };

//     //Blank underscore Loop/Answer Array

//     for (var i = 0; i < word.length; i++) {
//         answerArray[i] = "_";
//     };


//     //Updating the Answer Array
//     for (var j = 0; j < word.length; j++) {
//         if (word[j] === userGuess) {
//             answerArray[j] = userGuess; remainingLetters--;
//         }
//     };

//     //correct guess


//     //incorrect guess

//     //update game state
//     var updateGameState = function (guess, word, answerArray) {

//     };

//     //function for letter changing from "_ _ _ _ _" to "A _ a _ _ _"


//     //display what letter was guessed and storing letters and wins
//     userChoiceText.textContent =
//         winsText = textContent = "Wins: " + wins;


var wins = 0;
var losses = 0;

var maxErrors = 9;

var wordDisplayLettersElement = document.getElementById("word-display-letters");
var guessedLettersElement = document.getElementById("guessed-letters");
var errorCountElement = document.getElementById("error-count");
var winCountElement = document.getElementById("win-count");
var lossCountElement = document.getElementById("loss-count");

var blinkElements = document.getElementsByClassName("blinking");
var alertLineElements = document.getElementsByClassName("alert-line");

var validGuesses = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var game = new Hangman();

document.onkeyup = function (event) {
    var userGuess = event.key;

    if (!game.gameOver) {
        if (validGuesses.includes(userGuess)
            && !game.guessedLetters.includes(userGuess)) {
            game.checkGuess(userGuess);
        }
    } else {
        game = new Hangman();
        game.updatePageData();
    }
}

window.setInterval(function () {
    if (blinkElements.length > 0) {
        if (game.guessedLetters.length === 0 || game.gameOver) {
            if (blinkElements[0].style.opacity === "1") {
                for (var i = 0; i < blinkElements.length; i++) {
                    blinkElements[i].style.opacity = "0";
                }
            } else {
                for (var i = 0; i < blinkElements.length; i++) {
                    blinkElements[i].style.opacity = "1";
                }
            }
        } else {
            for (var i = 0; i < blinkElements.length; i++) {
                blinkElements[i].style.opacity = "0";
            }
        }
    }
}, 750);

function Hangman() {
    this.wordList = [
        "asphyxiation",
        "justice",
        "death",
        "fading",
        "punishment",
        "sentence",
        "execution",
        "unjust",
        "struggle",
        "throat",
        "trachea",
        "breathing",
        "oxygen",
        "gasping",
        "suffering",
        "spectators",
        "gallows",
        "powerless"
    ]

    this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    this.guessedLetters = [];
    this.errors = 0;
    this.visibleLetters = [];
    this.gameOver = false;
    this.alertLines = emptyAlert;
    for (var i = 0; i < this.word.length; i++) {
        this.visibleLetters[i] = (false);
    }
}

Hangman.prototype.checkGuess = function (char) {
    this.guessedLetters.push(char);

    var isInWord = false;
    for (var i = 0; i < this.word.length; i++) {
        if (this.word.charAt(i) === char) {
            isInWord = true;
            this.visibleLetters[i] = true;
        }
    }
    if (!isInWord) {
        this.errors++;
    }

    if (this.errors >= maxErrors) {
        losses++;
        this.alertLines = youLose;
        this.gameOver = true;
    }

    if (!this.visibleLetters.includes(false)) {
        wins++;
        this.alertLines = youWin;
        this.gameOver = true;
    }

    game.updatePageData();
};

Hangman.prototype.updatePageData = function () {
    var tempString = "";
    for (var i = 0; i < this.visibleLetters.length; i++) {
        tempString += ((this.visibleLetters[i] || this.gameOver) ? this.word.charAt(i).toUpperCase() : "_");
        if (i < (this.visibleLetters.length - 1)) tempString += " ";
    }
    wordDisplayLettersElement.textContent = tempString;

    tempString = "";
    for (var i = 0; i < this.guessedLetters.length; i++) {
        tempString += (this.guessedLetters[i].toUpperCase());
        if (i < (this.guessedLetters.length - 1)) tempString += " ";
    }
    for (var i = tempString.length; i < 51; i++) {
        tempString += " ";
    }
    guessedLettersElement.textContent = tempString;

    tempString = this.errors + " / " + maxErrors;
    for (var i = tempString.length; i < 32; i++) {
        tempString += " ";
    }
    errorCountElement.textContent = tempString;

    tempString = wins + "";
    for (var i = tempString.length; i < 45; i++) {
        tempString += " ";
    }
    winCountElement.textContent = tempString;

    tempString = losses + "";
    for (var i = tempString.length; i < 43; i++) {
        tempString += " ";
    }
    lossCountElement.textContent = tempString;

    for (var i = 0; i < blinkElements.length; i++) {
        blinkElements[i].textContent = (this.gameOver ? pressAnyKeyToReset[i] : pressAnyKeyToStart[i]);
    }

    for (var i = 0; i < alertLineElements.length; i++) {
        alertLineElements[i].textContent = (this.alertLines[i]);
    }
}

game.updatePageData();