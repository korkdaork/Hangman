//Sections/Steps of codes for Game
//1. Random Words
//2. Word Selection
//3. Key functions (on keyup.etc)
//4. Guessing the letter/current guess and guess remaining
//5. Letters already guessed
//6. End Conditions (win/los)
//7. Display the number of wins

//Variables
var words = ["Roxalani", "Alani", "Alans", "Scythians", "Romans", "Macedonians", "Athenians", "Spartans", "Carthigians", "Sarmatians", "Dacians"];
var word = words[Math.floor(Math.random() * words.length)];

//var of to start game with 0 wins
var wins = 0;

//var to hold the index of current word
var wordIndex = 0;

//remaining guess var
var

//Vars w/ references
var wordSelectedElement = document.getElementById("selected-word");
var winsElement = document.getElementById("wins");
var userGuessElement = document.getElementById("user-guess");
var guessedLettersElement = document.getElementById("guessed-letters")
var remainingGuessElement = document.getElementById("remaining-guesses");


//need to identify what user can choose - letter wise and add in toLowerCase().charAt()
var validGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Start Game, Reset Game, Win, Lose Variables
var pressAnyKeyToStart = ["Press Any Key to Start"];
var pressAnyKeyToReset = ["Press Any Key to Reset"];
var youWin = ["You Win"];
var youLose = ["You Lose"];

//Loop/Answer Array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

//Updating the Answer Array
for (var j = 0; j < word.length; j++) {
    if (word[j] === userGuess) {
        answerArray[j] = userGuess; remainingLetters--;
    }
};

//Rendering the word function
function renderWord() {
    if (wordInedx <= (words.lenght - 1)) {
        document.querySelector("#selected-word").innerHTML = words[wordIndex].answerArray;
    }
    else {
        document.querySelector("#selected-word").innerHTML = "There are no more words to guess!";
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
    }
};

//Function to update the wins.
function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
};

//MAIN GAME START

//Starting game functions
renderWord();
updateWins();

//game variable

var game = Hangman();

//function for onkeyup to start game
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();

    if (validGuess.includes(userGuess) && !game.guessedLetters) {
        game.checkGuess(userGuess);
    }
} else {
    game.updatePageData();

    //Determines what  which key was pressed and makes it lowercase
    var userGuess = event.key.toLowerCase();
};

//correct guess


//incorrect guess

//update game state
var updateGameState = function (guess, word, answerArray) {

};

//function for letter changing from "_ _ _ _ _" to "A _ a _ _ _"


//display what letter was guessed and storing letters and wins
userChoiceText.textContent = ;
winsText = textContent = "Wins: " + wins;
;