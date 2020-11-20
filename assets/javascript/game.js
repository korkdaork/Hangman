//PSUDOCODE AND CODE FOR HANGMAN GAME:

//1.  Random world list (minor)
var words = ["ROXALANI", "ALANI", "ALANS", "SCYTHIANS", "ROMANS", "MACEDONIANS", "ATHENIANS", "SPARTANS", "CARTHAGIANS", "SARMATIANS", "DACIANS", "BOII", "ARVERNI", "PARTHIANS", "SELEUCID", "BAKTRIA", "LUSITANI", "EPIRUS", "MASSAGETAE", "PONTUS", "PERGAMON", "CIMMERIA", "ICENI", "SUEBI"];
//2.  Random word select (minor)
var word = words[Math.floor(Math.random() * (words.length))];

//2a.  Setting variable for word index so that we can render a word on the page.
var wordIndex = 0;
//2b. Letters in a word variable
var remainLetters = word.length;
//2d.  Valid letter guesses
var validGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var answerArray = [];
var dashStore = [];
var maxTries = 10;
var guessedLetters = [];
var dashArray = [];
var gameStarted = false;
var gameFinished = false;
//2c. Wins variable
var wins = 0;

var selectedWord = document.querySelector("#selected-word").innerHTML;


//SECTION 1:  GETTING THE WORD  IN "_" BLANK SPACES

//Game Start - Rendering a random word
function gameStart() {
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = " _ ";
    };
}

//Generating/Rendering a Word
function renderWord() {
    document.querySelector("#selected-word").innerHTML = "Selected Word: " + word;
    //3b1. Target variable and replace the letters in the variable into underscore "_"

    let testArray = "";
    for (var i = 0; i < answerArray.length; i++) {
        testArray = testArray + answerArray[i];
    }

    document.querySelector("#selected-word").innerHTML = testArray;

};

//Generating/Rendering Wins
function renderWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
};

//Generating/Rendering Remaining-Guess
function renderMaxTries() {
    document.querySelector("#remaining-guesses").innerHTML = "Guesses Left: " + maxTries;
};

//Generating/
function renderGuessedLetters() {
    const node = document.createElement("P");
    node.innerHTML = guessedLetters;
    document.querySelector("#guessed-letters").appendChild(node);

    // document.querySelector("#guessed-letters").innerHTML = guess;
};

console.log(word)

//Reset game button and function --------- NEED TO BUILD

//Calling the functions (function needs to be prioritized as to what is called first)
gameStart()
renderWord()
renderWins()
renderMaxTries()
renderGuessedLetters();


//4.  SECTION 2:  USER LETTER GUESS
//4a.  Start Function (onkeyup)
document.onkeydown = function (event) {
    var userGuess = event.key.toUpperCase();

    if (wordIndex === word.length) {
        return;
    }

    for (var i = 0; i < word.length; i++) {
        if (userGuess === word[i]) {
            answerArray[i] = word[i];

        } else {
            renderGuessedLetters();
            maxTries -= 1;
            renderMaxTries()
            if
                (maxTries === 0) {
                // alert("You Lose!");
            }
        }
        console.log("max tries:", maxTries)

        console.log("user guess:", userGuess)
        //     remainGuess--;

        //     remainGuessLtr = remainGuessLtr + " " + userGuess;
        //     document.querySelector("#guessed-letters").innerHTML = "Letters Already Guessed: " + remainGuessLtr;
        // }
    };

    renderWord();
    renderGuessedLetters();


};

console.log(answerArray)




